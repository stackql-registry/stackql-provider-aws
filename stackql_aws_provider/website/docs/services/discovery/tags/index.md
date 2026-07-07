--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
  - discovery
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

Creates, updates, deletes, gets or lists a <code>tags</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tags" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.discovery.tags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_tags"
    values={[
        { label: 'describe_tags', value: 'describe_tags' }
    ]}
>
<TabItem value="describe_tags">

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
    <td><CopyableCode code="configurationId" /></td>
    <td><code>string</code></td>
    <td>The configuration ID for the item to tag. You can specify a list of keys and values. (pattern: &lt;code&gt;\S*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configurationType" /></td>
    <td><code>string</code></td>
    <td>A type of IT asset to tag. (SERVER, PROCESS, CONNECTION, APPLICATION)</td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>A type of tag on which to filter. For example, serverType.</td>
</tr>
<tr>
    <td><CopyableCode code="timeOfCreation" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the configuration tag was created in Coordinated Universal Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>A value on which to filter. For example key = serverType and value = web server.</td>
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
    <td><a href="#describe_tags"><CopyableCode code="describe_tags" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of configuration items that have tags as specified by the key-value pairs, name and value, passed to the optional parameter filters. There are three valid tag filter names: tagKey tagValue configurationId Also, all configuration items associated with your user that have tags can be listed if you call DescribeTags as is without passing any parameters.</td>
</tr>
<tr>
    <td><a href="#create_tags"><CopyableCode code="create_tags" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-configurationIds"><code>configurationIds</code></a>, <a href="#parameter-tags"><code>tags</code></a></td>
    <td></td>
    <td>Creates one or more tags for configuration items. Tags are metadata that help you categorize IT assets. This API accepts a list of multiple configuration items. Do not store sensitive information (like personal data) in tags.</td>
</tr>
<tr>
    <td><a href="#delete_tags"><CopyableCode code="delete_tags" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the association between configuration items and one or more tags. This API accepts a list of multiple configuration items.</td>
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
    defaultValue="describe_tags"
    values={[
        { label: 'describe_tags', value: 'describe_tags' }
    ]}
>
<TabItem value="describe_tags">

Retrieves a list of configuration items that have tags as specified by the key-value pairs, name and value, passed to the optional parameter filters. There are three valid tag filter names: tagKey tagValue configurationId Also, all configuration items associated with your user that have tags can be listed if you call DescribeTags as is without passing any parameters.

```sql
SELECT
configurationId,
configurationType,
key,
timeOfCreation,
value
FROM aws.discovery.tags
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_tags"
    values={[
        { label: 'create_tags', value: 'create_tags' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_tags">

Creates one or more tags for configuration items. Tags are metadata that help you categorize IT assets. This API accepts a list of multiple configuration items. Do not store sensitive information (like personal data) in tags.

```sql
INSERT INTO aws.discovery.tags (
configurationIds,
tags,
region
)
SELECT 
'{{ configurationIds }}' /* required */,
'{{ tags }}' /* required */,
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: tags
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the tags resource.
    - name: configurationIds
      value:
        - "{{ configurationIds }}"
      description: |
        A list of configuration items that you want to tag.
    - name: tags
      description: |
        Tags that you want to associate with one or more configuration items. Specify the tags that you want to create in a key-value format. For example: {"key": "serverType", "value": "webServer"}
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_tags"
    values={[
        { label: 'delete_tags', value: 'delete_tags' }
    ]}
>
<TabItem value="delete_tags">

Deletes the association between configuration items and one or more tags. This API accepts a list of multiple configuration items.

```sql
DELETE FROM aws.discovery.tags
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
