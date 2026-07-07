--- 
title: recording_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - recording_configurations
  - ivs
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

Creates, updates, deletes, gets or lists a <code>recording_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="recording_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ivs.recording_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_recording_configuration"
    values={[
        { label: 'get_recording_configuration', value: 'get_recording_configuration' },
        { label: 'list_recording_configurations', value: 'list_recording_configurations' }
    ]}
>
<TabItem value="get_recording_configuration">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Recording-configuration name. The value does not need to be unique. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Recording-configuration ARN. (pattern: &lt;code&gt;arn:aws:ivs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;+:recording-configuration/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="destinationConfiguration" /></td>
    <td><code>object</code></td>
    <td>A complex type that describes a location where recorded videos will be stored. Each member represents a type of destination configuration. For recording, you define one and only one type of destination configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="recordingReconnectWindowSeconds" /></td>
    <td><code>integer</code></td>
    <td>If a broadcast disconnects and then reconnects within the specified interval, the multiple streams will be considered a single broadcast and merged together. Default: 0.</td>
</tr>
<tr>
    <td><CopyableCode code="renditionConfiguration" /></td>
    <td><code>object</code></td>
    <td>Object that describes which renditions should be recorded for a stream.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Indicates the current state of the recording configuration. When the state is ACTIVE, the configuration is ready for recording a channel stream. (CREATING, CREATE_FAILED, ACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags attached to the resource. Array of 1-50 maps, each of the form string:string (key:value). See Best practices and strategies in Tagging Amazon Web Services Resources and Tag Editor for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.</td>
</tr>
<tr>
    <td><CopyableCode code="thumbnailConfiguration" /></td>
    <td><code>object</code></td>
    <td>An object representing a configuration of thumbnails for recorded video.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_recording_configurations">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Recording-configuration name. The value does not need to be unique. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Recording-configuration ARN. (pattern: &lt;code&gt;arn:aws:ivs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;+:recording-configuration/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="destinationConfiguration" /></td>
    <td><code>object</code></td>
    <td>A complex type that describes a location where recorded videos will be stored. Each member represents a type of destination configuration. For recording, you define one and only one type of destination configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Indicates the current state of the recording configuration. When the state is ACTIVE, the configuration is ready for recording a channel stream. (CREATING, CREATE_FAILED, ACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags attached to the resource. Array of 1-50 maps, each of the form string:string (key:value). See Best practices and strategies in Tagging Amazon Web Services Resources and Tag Editor for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.</td>
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
    <td><a href="#get_recording_configuration"><CopyableCode code="get_recording_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the recording configuration for the specified ARN.</td>
</tr>
<tr>
    <td><a href="#list_recording_configurations"><CopyableCode code="list_recording_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets summary information about all recording configurations in your account, in the Amazon Web Services region where the API request is processed.</td>
</tr>
<tr>
    <td><a href="#create_recording_configuration"><CopyableCode code="create_recording_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-destinationConfiguration"><code>destinationConfiguration</code></a></td>
    <td></td>
    <td>Creates a new recording configuration, used to enable recording to Amazon S3. Known issue: In the us-east-1 region, if you use the Amazon Web Services CLI to create a recording configuration, it returns success even if the S3 bucket is in a different region. In this case, the state of the recording configuration is CREATE_FAILED (instead of ACTIVE). (In other regions, the CLI correctly returns failure if the bucket is in a different region.) Workaround: Ensure that your S3 bucket is in the same region as the recording configuration. If you create a recording configuration in a different region as your S3 bucket, delete that recording configuration and create a new one with an S3 bucket from the correct region.</td>
</tr>
<tr>
    <td><a href="#delete_recording_configuration"><CopyableCode code="delete_recording_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the recording configuration for the specified ARN. If you try to delete a recording configuration that is associated with a channel, you will get an error (409 ConflictException). To avoid this, for all channels that reference the recording configuration, first use UpdateChannel to set the recordingConfigurationArn field to an empty string, then use DeleteRecordingConfiguration.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_recording_configuration"
    values={[
        { label: 'get_recording_configuration', value: 'get_recording_configuration' },
        { label: 'list_recording_configurations', value: 'list_recording_configurations' }
    ]}
>
<TabItem value="get_recording_configuration">

Gets the recording configuration for the specified ARN.

```sql
SELECT
name,
arn,
destinationConfiguration,
recordingReconnectWindowSeconds,
renditionConfiguration,
state,
tags,
thumbnailConfiguration
FROM aws.ivs.recording_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_recording_configurations">

Gets summary information about all recording configurations in your account, in the Amazon Web Services region where the API request is processed.

```sql
SELECT
name,
arn,
destinationConfiguration,
state,
tags
FROM aws.ivs.recording_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_recording_configuration"
    values={[
        { label: 'create_recording_configuration', value: 'create_recording_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_recording_configuration">

Creates a new recording configuration, used to enable recording to Amazon S3. Known issue: In the us-east-1 region, if you use the Amazon Web Services CLI to create a recording configuration, it returns success even if the S3 bucket is in a different region. In this case, the state of the recording configuration is CREATE_FAILED (instead of ACTIVE). (In other regions, the CLI correctly returns failure if the bucket is in a different region.) Workaround: Ensure that your S3 bucket is in the same region as the recording configuration. If you create a recording configuration in a different region as your S3 bucket, delete that recording configuration and create a new one with an S3 bucket from the correct region.

```sql
INSERT INTO aws.ivs.recording_configurations (
name,
destinationConfiguration,
tags,
thumbnailConfiguration,
recordingReconnectWindowSeconds,
renditionConfiguration,
region
)
SELECT 
'{{ name }}',
'{{ destinationConfiguration }}' /* required */,
'{{ tags }}',
'{{ thumbnailConfiguration }}',
{{ recordingReconnectWindowSeconds }},
'{{ renditionConfiguration }}',
'{{ region }}'
RETURNING
recordingConfiguration
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: recording_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the recording_configurations resource.
    - name: name
      value: "{{ name }}"
    - name: destinationConfiguration
      description: |
        A complex type that describes a location where recorded videos will be stored. Each member represents a type of destination configuration. For recording, you define one and only one type of destination configuration.
      value:
        s3:
          bucketName: "{{ bucketName }}"
    - name: tags
      value: "{{ tags }}"
    - name: thumbnailConfiguration
      description: |
        An object representing a configuration of thumbnails for recorded video.
      value:
        recordingMode: "{{ recordingMode }}"
        targetIntervalSeconds: {{ targetIntervalSeconds }}
        resolution: "{{ resolution }}"
        storage:
          - "{{ storage }}"
    - name: recordingReconnectWindowSeconds
      value: {{ recordingReconnectWindowSeconds }}
    - name: renditionConfiguration
      description: |
        Object that describes which renditions should be recorded for a stream.
      value:
        renditionSelection: "{{ renditionSelection }}"
        renditions:
          - "{{ renditions }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_recording_configuration"
    values={[
        { label: 'delete_recording_configuration', value: 'delete_recording_configuration' }
    ]}
>
<TabItem value="delete_recording_configuration">

Deletes the recording configuration for the specified ARN. If you try to delete a recording configuration that is associated with a channel, you will get an error (409 ConflictException). To avoid this, for all channels that reference the recording configuration, first use UpdateChannel to set the recordingConfigurationArn field to an empty string, then use DeleteRecordingConfiguration.

```sql
DELETE FROM aws.ivs.recording_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
