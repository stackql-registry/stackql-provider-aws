--- 
title: custom_plugins
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_plugins
  - kafkaconnect
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

Creates, updates, deletes, gets or lists a <code>custom_plugins</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="custom_plugins" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kafkaconnect.custom_plugins" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_custom_plugin"
    values={[
        { label: 'describe_custom_plugin', value: 'describe_custom_plugin' },
        { label: 'list_custom_plugins', value: 'list_custom_plugins' }
    ]}
>
<TabItem value="describe_custom_plugin">

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
    <td>The name of the custom plugin.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the custom plugin was created.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_plugin_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the custom plugin.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_plugin_state" /></td>
    <td><code>string</code></td>
    <td>The state of the custom plugin. (CREATING, CREATE_FAILED, ACTIVE, UPDATING, UPDATE_FAILED, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the custom plugin.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_revision" /></td>
    <td><code>object</code></td>
    <td>The latest successfully created revision of the custom plugin. If there are no successfully created revisions, this field will be absent.</td>
</tr>
<tr>
    <td><CopyableCode code="state_description" /></td>
    <td><code>object</code></td>
    <td>Details about the state of a custom plugin.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_custom_plugins">

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
    <td>The name of the custom plugin.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the custom plugin was created.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_plugin_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the custom plugin.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_plugin_state" /></td>
    <td><code>string</code></td>
    <td>The state of the custom plugin. (CREATING, CREATE_FAILED, ACTIVE, UPDATING, UPDATE_FAILED, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the custom plugin.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_revision" /></td>
    <td><code>object</code></td>
    <td>The latest revision of the custom plugin.</td>
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
    <td><a href="#describe_custom_plugin"><CopyableCode code="describe_custom_plugin" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-custom_plugin_arn"><code>custom_plugin_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>A summary description of the custom plugin.</td>
</tr>
<tr>
    <td><a href="#list_custom_plugins"><CopyableCode code="list_custom_plugins" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-namePrefix"><code>namePrefix</code></a></td>
    <td>Returns a list of all of the custom plugins in this account and Region.</td>
</tr>
<tr>
    <td><a href="#create_custom_plugin"><CopyableCode code="create_custom_plugin" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-contentType"><code>contentType</code></a>, <a href="#parameter-location"><code>location</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a custom plugin using the specified properties.</td>
</tr>
<tr>
    <td><a href="#delete_custom_plugin"><CopyableCode code="delete_custom_plugin" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-custom_plugin_arn"><code>custom_plugin_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a custom plugin.</td>
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
<tr id="parameter-custom_plugin_arn">
    <td><CopyableCode code="custom_plugin_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the custom plugin that you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of custom plugins to list in one response.</td>
</tr>
<tr id="parameter-namePrefix">
    <td><CopyableCode code="namePrefix" /></td>
    <td><code>string</code></td>
    <td>Lists custom plugin names that start with the specified text string.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If the response of a ListCustomPlugins operation is truncated, it will include a NextToken. Send this NextToken in a subsequent request to continue listing from where the previous operation left off.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_custom_plugin"
    values={[
        { label: 'describe_custom_plugin', value: 'describe_custom_plugin' },
        { label: 'list_custom_plugins', value: 'list_custom_plugins' }
    ]}
>
<TabItem value="describe_custom_plugin">

A summary description of the custom plugin.

```sql
SELECT
name,
creation_time,
custom_plugin_arn,
custom_plugin_state,
description,
latest_revision,
state_description
FROM aws.kafkaconnect.custom_plugins
WHERE custom_plugin_arn = '{{ custom_plugin_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_custom_plugins">

Returns a list of all of the custom plugins in this account and Region.

```sql
SELECT
name,
creation_time,
custom_plugin_arn,
custom_plugin_state,
description,
latest_revision
FROM aws.kafkaconnect.custom_plugins
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND namePrefix = '{{ namePrefix }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_custom_plugin"
    values={[
        { label: 'create_custom_plugin', value: 'create_custom_plugin' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_custom_plugin">

Creates a custom plugin using the specified properties.

```sql
INSERT INTO aws.kafkaconnect.custom_plugins (
contentType,
description,
location,
name,
tags,
region
)
SELECT 
'{{ contentType }}' /* required */,
'{{ description }}',
'{{ location }}' /* required */,
'{{ name }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
name,
custom_plugin_arn,
custom_plugin_state,
revision
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: custom_plugins
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the custom_plugins resource.
    - name: contentType
      value: "{{ contentType }}"
      valid_values: ['JAR', 'ZIP']
    - name: description
      value: "{{ description }}"
    - name: location
      description: |
        Information about the location of a custom plugin.
      value:
        s3Location:
          bucketArn: "{{ bucketArn }}"
          fileKey: "{{ fileKey }}"
          objectVersion: "{{ objectVersion }}"
    - name: name
      value: "{{ name }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_custom_plugin"
    values={[
        { label: 'delete_custom_plugin', value: 'delete_custom_plugin' }
    ]}
>
<TabItem value="delete_custom_plugin">

Deletes a custom plugin.

```sql
DELETE FROM aws.kafkaconnect.custom_plugins
WHERE custom_plugin_arn = '{{ custom_plugin_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
