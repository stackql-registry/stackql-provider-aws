--- 
title: configuration_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - configuration_sets
  - sms_voice
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

Creates, updates, deletes, gets or lists a <code>configuration_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="configuration_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sms_voice.configuration_sets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_configuration_sets"
    values={[
        { label: 'list_configuration_sets', value: 'list_configuration_sets' }
    ]}
>
<TabItem value="list_configuration_sets">

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
    <td><CopyableCode code="configuration_set" /></td>
    <td><code>string</code></td>
    <td>An object that contains a list of configuration sets for your account in the current region.</td>
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
    <td><a href="#list_configuration_sets"><CopyableCode code="list_configuration_sets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-PageSize"><code>PageSize</code></a></td>
    <td>List all of the configuration sets associated with your Amazon Pinpoint account in the current region.</td>
</tr>
<tr>
    <td><a href="#create_configuration_set"><CopyableCode code="create_configuration_set" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Create a new configuration set. After you create the configuration set, you can add one or more event destinations to it.</td>
</tr>
<tr>
    <td><a href="#delete_configuration_set"><CopyableCode code="delete_configuration_set" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-configuration_set_name"><code>configuration_set_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing configuration set.</td>
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
<tr id="parameter-configuration_set_name">
    <td><CopyableCode code="configuration_set_name" /></td>
    <td><code>string</code></td>
    <td>ConfigurationSetName</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token returned from a previous call to the API that indicates the position in the list of results.</td>
</tr>
<tr id="parameter-PageSize">
    <td><CopyableCode code="PageSize" /></td>
    <td><code>string</code></td>
    <td>Used to specify the number of items that should be returned in the response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_configuration_sets"
    values={[
        { label: 'list_configuration_sets', value: 'list_configuration_sets' }
    ]}
>
<TabItem value="list_configuration_sets">

List all of the configuration sets associated with your Amazon Pinpoint account in the current region.

```sql
SELECT
configuration_set
FROM aws.sms_voice.configuration_sets
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND PageSize = '{{ PageSize }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_configuration_set"
    values={[
        { label: 'create_configuration_set', value: 'create_configuration_set' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_configuration_set">

Create a new configuration set. After you create the configuration set, you can add one or more event destinations to it.

```sql
INSERT INTO aws.sms_voice.configuration_sets (
ConfigurationSetName,
region
)
SELECT 
'{{ ConfigurationSetName }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: configuration_sets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the configuration_sets resource.
    - name: ConfigurationSetName
      value: "{{ ConfigurationSetName }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_configuration_set"
    values={[
        { label: 'delete_configuration_set', value: 'delete_configuration_set' }
    ]}
>
<TabItem value="delete_configuration_set">

Deletes an existing configuration set.

```sql
DELETE FROM aws.sms_voice.configuration_sets
WHERE configuration_set_name = '{{ configuration_set_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
