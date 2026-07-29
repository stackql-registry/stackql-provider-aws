--- 
title: encoder_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - encoder_configurations
  - ivs_realtime
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

Creates, updates, deletes, gets or lists an <code>encoder_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="encoder_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ivs_realtime.encoder_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_encoder_configuration"
    values={[
        { label: 'get_encoder_configuration', value: 'get_encoder_configuration' },
        { label: 'list_encoder_configurations', value: 'list_encoder_configurations' }
    ]}
>
<TabItem value="get_encoder_configuration">

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
    <td>Optional name to identify the resource. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>ARN of the EncoderConfiguration resource. (pattern: &lt;code&gt;arn:aws:ivs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;+:encoder-configuration/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags attached to the resource. Array of maps, each of the form string:string (key:value). See Best practices and strategies in Tagging AWS Resources and Tag Editor for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.</td>
</tr>
<tr>
    <td><CopyableCode code="video" /></td>
    <td><code>object</code></td>
    <td>Settings for video.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_encoder_configurations">

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
    <td><CopyableCode code="encoder_configurations" /></td>
    <td><code>array</code></td>
    <td>List of the matching EncoderConfigurations (summary information only).</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>If there are more encoder configurations than maxResults, use nextToken in the request to get the next set. (pattern: &lt;code&gt;&#91;a-zA-Z0-9+/=_-&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#get_encoder_configuration"><CopyableCode code="get_encoder_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified EncoderConfiguration resource.</td>
</tr>
<tr>
    <td><a href="#list_encoder_configurations"><CopyableCode code="list_encoder_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets summary information about all EncoderConfigurations in your account, in the AWS region where the API request is processed.</td>
</tr>
<tr>
    <td><a href="#create_encoder_configuration"><CopyableCode code="create_encoder_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates an EncoderConfiguration object.</td>
</tr>
<tr>
    <td><a href="#delete_encoder_configuration"><CopyableCode code="delete_encoder_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an EncoderConfiguration resource. Ensures that no Compositions are using this template; otherwise, returns an error.</td>
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
    defaultValue="get_encoder_configuration"
    values={[
        { label: 'get_encoder_configuration', value: 'get_encoder_configuration' },
        { label: 'list_encoder_configurations', value: 'list_encoder_configurations' }
    ]}
>
<TabItem value="get_encoder_configuration">

Gets information about the specified EncoderConfiguration resource.

```sql
SELECT
name,
arn,
tags,
video
FROM aws.ivs_realtime.encoder_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_encoder_configurations">

Gets summary information about all EncoderConfigurations in your account, in the AWS region where the API request is processed.

```sql
SELECT
encoder_configurations,
next_token
FROM aws.ivs_realtime.encoder_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_encoder_configuration"
    values={[
        { label: 'create_encoder_configuration', value: 'create_encoder_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_encoder_configuration">

Creates an EncoderConfiguration object.

```sql
INSERT INTO aws.ivs_realtime.encoder_configurations (
name,
video,
tags,
region
)
SELECT 
'{{ name }}',
'{{ video }}',
'{{ tags }}',
'{{ region }}'
RETURNING
encoder_configuration
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: encoder_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the encoder_configurations resource.
    - name: name
      value: "{{ name }}"
    - name: video
      description: |
        Settings for video.
      value:
        width: {{ width }}
        height: {{ height }}
        framerate: {{ framerate }}
        bitrate: {{ bitrate }}
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_encoder_configuration"
    values={[
        { label: 'delete_encoder_configuration', value: 'delete_encoder_configuration' }
    ]}
>
<TabItem value="delete_encoder_configuration">

Deletes an EncoderConfiguration resource. Ensures that no Compositions are using this template; otherwise, returns an error.

```sql
DELETE FROM aws.ivs_realtime.encoder_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
