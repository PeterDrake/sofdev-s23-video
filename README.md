# sofdev-s23-video
Video project for Software Development, spring 2023

## Installation Instructions for Handbrake on Raspberry Pi


### Install Dependencies
`sudo apt get update`

```
sudo apt-get install appstream autoconf automake autopoint build-essential cmake git libass-dev libbz2-dev libfontconfig1-dev libfreetype6-dev libfribidi-dev libharfbuzz-dev libjansson-dev liblzma-dev libmp3lame-dev libnuma-dev libogg-dev libopus-dev libsamplerate-dev libspeex-dev libtheora-dev libtool libtool-bin libturbojpeg0-dev libvorbis-dev libx264-dev libxml2-dev libvpx-dev m4 make meson nasm ninja-build patch pkg-config python tar zlib1g-dev
```

### Install Curl
`sudo apt install curl`

### Install Node.js and NPM
```
curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -
```
```
sudo apt install nodejs
```
Check if node.js and NPM are installed by calling
```
node -v
npm -v
```
If NPM is not installed:
`sudo apt install npm`

### Fix add-apt-repository
`sudo apt install software-properties-common`
`type apt-add-repository`

### Install handbrake-js
`npm install handbrake-js --save`
`sudo add-apt-repository --yes ppa:stebbins/handbrake-releases`
`sudo apt-get install -qq handbrake-cli`

See `handbrake_test.js` for an example.
