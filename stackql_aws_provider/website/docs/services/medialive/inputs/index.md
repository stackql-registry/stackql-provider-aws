--- 
title: inputs
hide_title: false
hide_table_of_contents: false
keywords:
  - inputs
  - medialive
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>inputs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="inputs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.medialive.inputs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_input"
    values={[
        { label: 'describe_input', value: 'describe_input' },
        { label: 'list_inputs', value: 'list_inputs' }
    ]}
>
<TabItem value="describe_input">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="attached_channels" /></td>
    <td><code>array</code></td>
    <td>Placeholder documentation for __listOf__string</td>
</tr>
<tr>
    <td><CopyableCode code="destinations" /></td>
    <td><code>array</code></td>
    <td>A list of the destinations of the input (PUSH-type).</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="input_class" /></td>
    <td><code>string</code></td>
    <td>STANDARD - MediaLive expects two sources to be connected to this input. If the channel is also STANDARD, both sources will be ingested. If the channel is SINGLE_PIPELINE, only the first source will be ingested; the second source will always be ignored, even if the first source fails. SINGLE_PIPELINE - You can connect only one source to this input. If the ChannelClass is also SINGLE_PIPELINE, this value is valid. If the ChannelClass is STANDARD, this value is not valid because the channel requires two sources in the input. (STANDARD, SINGLE_PIPELINE)</td>
</tr>
<tr>
    <td><CopyableCode code="input_devices" /></td>
    <td><code>array</code></td>
    <td>Placeholder documentation for __listOfInputDeviceSettings</td>
</tr>
<tr>
    <td><CopyableCode code="input_network_location" /></td>
    <td><code>string</code></td>
    <td>With the introduction of MediaLive Anywhere, a MediaLive input can now exist in two different places: AWS or inside an on-premises datacenter. By default all inputs will continue to be AWS inputs. (AWS, ON_PREMISES)</td>
</tr>
<tr>
    <td><CopyableCode code="input_partner_ids" /></td>
    <td><code>array</code></td>
    <td>Placeholder documentation for __listOf__string</td>
</tr>
<tr>
    <td><CopyableCode code="input_source_type" /></td>
    <td><code>string</code></td>
    <td>Certain pull input sources can be dynamic, meaning that they can have their URL's dynamically changes during input switch actions. Presently, this functionality only works with MP4_FILE and TS_FILE inputs. (STATIC, DYNAMIC)</td>
</tr>
<tr>
    <td><CopyableCode code="media_connect_flows" /></td>
    <td><code>array</code></td>
    <td>A list of MediaConnect Flows for this input.</td>
</tr>
<tr>
    <td><CopyableCode code="multicast_settings" /></td>
    <td><code>object</code></td>
    <td>Multicast Input settings.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="router_settings" /></td>
    <td><code>object</code></td>
    <td>Information about any MediaConnect router association with this input.</td>
</tr>
<tr>
    <td><CopyableCode code="sdi_sources" /></td>
    <td><code>array</code></td>
    <td>SDI Sources for this Input.</td>
</tr>
<tr>
    <td><CopyableCode code="security_groups" /></td>
    <td><code>array</code></td>
    <td>Placeholder documentation for __listOf__string</td>
</tr>
<tr>
    <td><CopyableCode code="smpte_2110_receiver_group_settings" /></td>
    <td><code>object</code></td>
    <td>Configures the sources for the SMPTE 2110 Receiver Group input.</td>
</tr>
<tr>
    <td><CopyableCode code="sources" /></td>
    <td><code>array</code></td>
    <td>A list of the sources of the input (PULL-type).</td>
</tr>
<tr>
    <td><CopyableCode code="srt_settings" /></td>
    <td><code>object</code></td>
    <td>The settings associated with an SRT input.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for InputState (CREATING, DETACHED, ATTACHED, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A collection of key-value pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The different types of inputs that AWS Elemental MediaLive supports. (UDP_PUSH, RTP_PUSH, RTMP_PUSH, RTMP_PULL, URL_PULL, MP4_FILE, MEDIACONNECT, INPUT_DEVICE, AWS_CDI, TS_FILE, SRT_CALLER, MULTICAST, SMPTE_2110_RECEIVER_GROUP, SDI, MEDIACONNECT_ROUTER, SRT_LISTENER)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_inputs">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="attached_channels" /></td>
    <td><code>array</code></td>
    <td>Placeholder documentation for __listOf__string</td>
</tr>
<tr>
    <td><CopyableCode code="destinations" /></td>
    <td><code>array</code></td>
    <td>A list of the destinations of the input (PUSH-type).</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="input_class" /></td>
    <td><code>string</code></td>
    <td>STANDARD - MediaLive expects two sources to be connected to this input. If the channel is also STANDARD, both sources will be ingested. If the channel is SINGLE_PIPELINE, only the first source will be ingested; the second source will always be ignored, even if the first source fails. SINGLE_PIPELINE - You can connect only one source to this input. If the ChannelClass is also SINGLE_PIPELINE, this value is valid. If the ChannelClass is STANDARD, this value is not valid because the channel requires two sources in the input. (STANDARD, SINGLE_PIPELINE)</td>
</tr>
<tr>
    <td><CopyableCode code="input_devices" /></td>
    <td><code>array</code></td>
    <td>Placeholder documentation for __listOfInputDeviceSettings</td>
</tr>
<tr>
    <td><CopyableCode code="input_network_location" /></td>
    <td><code>string</code></td>
    <td>With the introduction of MediaLive Anywhere, a MediaLive input can now exist in two different places: AWS or inside an on-premises datacenter. By default all inputs will continue to be AWS inputs. (AWS, ON_PREMISES)</td>
</tr>
<tr>
    <td><CopyableCode code="input_partner_ids" /></td>
    <td><code>array</code></td>
    <td>Placeholder documentation for __listOf__string</td>
</tr>
<tr>
    <td><CopyableCode code="input_source_type" /></td>
    <td><code>string</code></td>
    <td>Certain pull input sources can be dynamic, meaning that they can have their URL's dynamically changes during input switch actions. Presently, this functionality only works with MP4_FILE and TS_FILE inputs. (STATIC, DYNAMIC)</td>
</tr>
<tr>
    <td><CopyableCode code="media_connect_flows" /></td>
    <td><code>array</code></td>
    <td>A list of MediaConnect Flows for this input.</td>
</tr>
<tr>
    <td><CopyableCode code="multicast_settings" /></td>
    <td><code>object</code></td>
    <td>Multicast Input settings.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="router_settings" /></td>
    <td><code>object</code></td>
    <td>Information about any MediaConnect router association with this input.</td>
</tr>
<tr>
    <td><CopyableCode code="sdi_sources" /></td>
    <td><code>array</code></td>
    <td>SDI Sources for this Input.</td>
</tr>
<tr>
    <td><CopyableCode code="security_groups" /></td>
    <td><code>array</code></td>
    <td>Placeholder documentation for __listOf__string</td>
</tr>
<tr>
    <td><CopyableCode code="smpte_2110_receiver_group_settings" /></td>
    <td><code>object</code></td>
    <td>Configures the sources for the SMPTE 2110 Receiver Group input.</td>
</tr>
<tr>
    <td><CopyableCode code="sources" /></td>
    <td><code>array</code></td>
    <td>A list of the sources of the input (PULL-type).</td>
</tr>
<tr>
    <td><CopyableCode code="srt_settings" /></td>
    <td><code>object</code></td>
    <td>The settings associated with an SRT input.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for InputState (CREATING, DETACHED, ATTACHED, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A collection of key-value pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The different types of inputs that AWS Elemental MediaLive supports. (UDP_PUSH, RTP_PUSH, RTMP_PUSH, RTMP_PULL, URL_PULL, MP4_FILE, MEDIACONNECT, INPUT_DEVICE, AWS_CDI, TS_FILE, SRT_CALLER, MULTICAST, SMPTE_2110_RECEIVER_GROUP, SDI, MEDIACONNECT_ROUTER, SRT_LISTENER)</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#describe_input"><CopyableCode code="describe_input" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-input_id"><code>input_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Produces details about an input</td>
</tr>
<tr>
    <td><a href="#list_inputs"><CopyableCode code="list_inputs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Produces list of inputs that have been created</td>
</tr>
<tr>
    <td><a href="#create_partner_input"><CopyableCode code="create_partner_input" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-input_id"><code>input_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Create a partner input</td>
</tr>
<tr>
    <td><a href="#create_input"><CopyableCode code="create_input" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Create an input</td>
</tr>
<tr>
    <td><a href="#update_input"><CopyableCode code="update_input" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-input_id"><code>input_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an input.</td>
</tr>
<tr>
    <td><a href="#delete_input"><CopyableCode code="delete_input" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-input_id"><code>input_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the input end point</td>
</tr>
<tr>
    <td><a href="#reboot_input_device"><CopyableCode code="reboot_input_device" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-input_device_id"><code>input_device_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Send a reboot command to the specified input device. The device will begin rebooting within a few seconds of sending the command. When the reboot is complete, the device’s connection status will change to connected.</td>
</tr>
<tr>
    <td><a href="#start_input_device"><CopyableCode code="start_input_device" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-input_device_id"><code>input_device_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Start an input device that is attached to a MediaConnect flow. (There is no need to start a device that is attached to a MediaLive input; MediaLive starts the device when the channel starts.)</td>
</tr>
<tr>
    <td><a href="#stop_input_device"><CopyableCode code="stop_input_device" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-input_device_id"><code>input_device_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Stop an input device that is attached to a MediaConnect flow. (There is no need to stop a device that is attached to a MediaLive input; MediaLive automatically stops the device when the channel stops.)</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-input_device_id">
    <td><CopyableCode code="input_device_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the input device to stop. For example, hd-123456789abcdef.</td>
</tr>
<tr id="parameter-input_id">
    <td><CopyableCode code="input_id" /></td>
    <td><code>string</code></td>
    <td>Unique ID of the input</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_input"
    values={[
        { label: 'describe_input', value: 'describe_input' },
        { label: 'list_inputs', value: 'list_inputs' }
    ]}
>
<TabItem value="describe_input">

Produces details about an input

```sql
SELECT
arn,
attached_channels,
destinations,
id,
input_class,
input_devices,
input_network_location,
input_partner_ids,
input_source_type,
media_connect_flows,
multicast_settings,
name,
role_arn,
router_settings,
sdi_sources,
security_groups,
smpte_2110_receiver_group_settings,
sources,
srt_settings,
state,
tags,
type
FROM aws.medialive.inputs
WHERE input_id = '{{ input_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_inputs">

Produces list of inputs that have been created

```sql
SELECT
arn,
attached_channels,
destinations,
id,
input_class,
input_devices,
input_network_location,
input_partner_ids,
input_source_type,
media_connect_flows,
multicast_settings,
name,
role_arn,
router_settings,
sdi_sources,
security_groups,
smpte_2110_receiver_group_settings,
sources,
srt_settings,
state,
tags,
type
FROM aws.medialive.inputs
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_partner_input"
    values={[
        { label: 'create_partner_input', value: 'create_partner_input' },
        { label: 'create_input', value: 'create_input' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_partner_input">

Create a partner input

```sql
INSERT INTO aws.medialive.inputs (
RequestId,
Tags,
input_id,
region
)
SELECT 
'{{ RequestId }}',
'{{ Tags }}',
'{{ input_id }}',
'{{ region }}'
RETURNING
input
;
```
</TabItem>
<TabItem value="create_input">

Create an input

```sql
INSERT INTO aws.medialive.inputs (
Destinations,
InputDevices,
InputSecurityGroups,
MediaConnectFlows,
Name,
RequestId,
RoleArn,
Sources,
Tags,
Type,
Vpc,
SrtSettings,
InputNetworkLocation,
MulticastSettings,
Smpte2110ReceiverGroupSettings,
SdiSources,
RouterSettings,
region
)
SELECT 
'{{ Destinations }}',
'{{ InputDevices }}',
'{{ InputSecurityGroups }}',
'{{ MediaConnectFlows }}',
'{{ Name }}',
'{{ RequestId }}',
'{{ RoleArn }}',
'{{ Sources }}',
'{{ Tags }}',
'{{ Type }}',
'{{ Vpc }}',
'{{ SrtSettings }}',
'{{ InputNetworkLocation }}',
'{{ MulticastSettings }}',
'{{ Smpte2110ReceiverGroupSettings }}',
'{{ SdiSources }}',
'{{ RouterSettings }}',
'{{ region }}'
RETURNING
input
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: inputs
  props:
    - name: input_id
      value: "{{ input_id }}"
      description: Required parameter for the inputs resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the inputs resource.
    - name: RequestId
      value: "{{ RequestId }}"
      description: |
        Placeholder documentation for __string
    - name: Tags
      value: "{{ Tags }}"
      description: |
        Placeholder documentation for Tags
    - name: Destinations
      description: |
        Placeholder documentation for __listOfInputDestinationRequest
      value:
        - StreamName: "{{ StreamName }}"
          Network: "{{ Network }}"
          NetworkRoutes: "{{ NetworkRoutes }}"
          StaticIpAddress: "{{ StaticIpAddress }}"
    - name: InputDevices
      description: |
        Placeholder documentation for __listOfInputDeviceSettings
      value:
        - Id: "{{ Id }}"
    - name: InputSecurityGroups
      value:
        - "{{ InputSecurityGroups }}"
      description: |
        Placeholder documentation for __listOf__string
    - name: MediaConnectFlows
      description: |
        Placeholder documentation for __listOfMediaConnectFlowRequest
      value:
        - FlowArn: "{{ FlowArn }}"
    - name: Name
      value: "{{ Name }}"
      description: |
        Placeholder documentation for __string
    - name: RoleArn
      value: "{{ RoleArn }}"
      description: |
        Placeholder documentation for __string
    - name: Sources
      description: |
        Placeholder documentation for __listOfInputSourceRequest
      value:
        - PasswordParam: "{{ PasswordParam }}"
          Url: "{{ Url }}"
          Username: "{{ Username }}"
    - name: Type
      value: "{{ Type }}"
      description: |
        The different types of inputs that AWS Elemental MediaLive supports.
      valid_values: ['UDP_PUSH', 'RTP_PUSH', 'RTMP_PUSH', 'RTMP_PULL', 'URL_PULL', 'MP4_FILE', 'MEDIACONNECT', 'INPUT_DEVICE', 'AWS_CDI', 'TS_FILE', 'SRT_CALLER', 'MULTICAST', 'SMPTE_2110_RECEIVER_GROUP', 'SDI', 'MEDIACONNECT_ROUTER', 'SRT_LISTENER']
    - name: Vpc
      description: |
        Settings for a private VPC Input. When this property is specified, the input destination addresses will be created in a VPC rather than with public Internet addresses. This property requires setting the roleArn property on Input creation. Not compatible with the inputSecurityGroups property.
      value:
        SecurityGroupIds:
          - "{{ SecurityGroupIds }}"
        SubnetIds:
          - "{{ SubnetIds }}"
    - name: SrtSettings
      description: |
        Configures the settings for SRT inputs. Provide either srtCallerSources (for SRT_CALLER type) OR srtListenerSettings (for SRT_LISTENER type), not both.
      value:
        SrtCallerSources:
          - Decryption:
              Algorithm: "{{ Algorithm }}"
              PassphraseSecretArn: "{{ PassphraseSecretArn }}"
            MinimumLatency: {{ MinimumLatency }}
            SrtListenerAddress: "{{ SrtListenerAddress }}"
            SrtListenerPort: "{{ SrtListenerPort }}"
            StreamId: "{{ StreamId }}"
        SrtListenerSettings:
          Decryption:
            Algorithm: "{{ Algorithm }}"
            PassphraseSecretArn: "{{ PassphraseSecretArn }}"
          MinimumLatency: {{ MinimumLatency }}
          StreamId: "{{ StreamId }}"
    - name: InputNetworkLocation
      value: "{{ InputNetworkLocation }}"
      description: |
        With the introduction of MediaLive Anywhere, a MediaLive input can now exist in two different places: AWS or inside an on-premises datacenter. By default all inputs will continue to be AWS inputs.
      valid_values: ['AWS', 'ON_PREMISES']
    - name: MulticastSettings
      description: |
        Settings for a Multicast input. Contains a list of multicast Urls and optional source ip addresses.
      value:
        Sources:
          - SourceIp: "{{ SourceIp }}"
            Url: "{{ Url }}"
    - name: Smpte2110ReceiverGroupSettings
      description: |
        Configures the sources for the SMPTE 2110 Receiver Group input.
      value:
        Smpte2110ReceiverGroups:
          - SdpSettings:
              AncillarySdps:
                - MediaIndex: {{ MediaIndex }}
                  SdpUrl: "{{ SdpUrl }}"
              AudioSdps:
                - MediaIndex: {{ MediaIndex }}
                  SdpUrl: "{{ SdpUrl }}"
              VideoSdp:
                MediaIndex: {{ MediaIndex }}
                SdpUrl: "{{ SdpUrl }}"
    - name: SdiSources
      value:
        - "{{ SdiSources }}"
      description: |
        SDI Sources for this Input.
    - name: RouterSettings
      description: |
        This is the collection of settings that are used during the creation of a MediaConnect router input.
      value:
        Destinations:
          - AvailabilityZoneName: "{{ AvailabilityZoneName }}"
        EncryptionType: "{{ EncryptionType }}"
        SecretArn: "{{ SecretArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_input"
    values={[
        { label: 'update_input', value: 'update_input' }
    ]}
>
<TabItem value="update_input">

Updates an input.

```sql
UPDATE aws.medialive.inputs
SET 
Destinations = '{{ Destinations }}',
InputDevices = '{{ InputDevices }}',
InputSecurityGroups = '{{ InputSecurityGroups }}',
MediaConnectFlows = '{{ MediaConnectFlows }}',
Name = '{{ Name }}',
RoleArn = '{{ RoleArn }}',
Sources = '{{ Sources }}',
SrtSettings = '{{ SrtSettings }}',
MulticastSettings = '{{ MulticastSettings }}',
Smpte2110ReceiverGroupSettings = '{{ Smpte2110ReceiverGroupSettings }}',
SdiSources = '{{ SdiSources }}',
SpecialRouterSettings = '{{ SpecialRouterSettings }}'
WHERE 
input_id = '{{ input_id }}' --required
AND region = '{{ region }}' --required
RETURNING
input;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_input"
    values={[
        { label: 'delete_input', value: 'delete_input' }
    ]}
>
<TabItem value="delete_input">

Deletes the input end point

```sql
DELETE FROM aws.medialive.inputs
WHERE input_id = '{{ input_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="reboot_input_device"
    values={[
        { label: 'reboot_input_device', value: 'reboot_input_device' },
        { label: 'start_input_device', value: 'start_input_device' },
        { label: 'stop_input_device', value: 'stop_input_device' }
    ]}
>
<TabItem value="reboot_input_device">

Send a reboot command to the specified input device. The device will begin rebooting within a few seconds of sending the command. When the reboot is complete, the device’s connection status will change to connected.

```sql
EXEC aws.medialive.inputs.reboot_input_device 
@input_device_id='{{ input_device_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Force": "{{ Force }}"
}'
;
```
</TabItem>
<TabItem value="start_input_device">

Start an input device that is attached to a MediaConnect flow. (There is no need to start a device that is attached to a MediaLive input; MediaLive starts the device when the channel starts.)

```sql
EXEC aws.medialive.inputs.start_input_device 
@input_device_id='{{ input_device_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="stop_input_device">

Stop an input device that is attached to a MediaConnect flow. (There is no need to stop a device that is attached to a MediaLive input; MediaLive automatically stops the device when the channel stops.)

```sql
EXEC aws.medialive.inputs.stop_input_device 
@input_device_id='{{ input_device_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
