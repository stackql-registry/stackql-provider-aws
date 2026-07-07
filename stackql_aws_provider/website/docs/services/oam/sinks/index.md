--- 
title: sinks
hide_title: false
hide_table_of_contents: false
keywords:
  - sinks
  - oam
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

Creates, updates, deletes, gets or lists a <code>sinks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sinks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.oam.sinks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_sink"
    values={[
        { label: 'get_sink', value: 'get_sink' },
        { label: 'list_sinks', value: 'list_sinks' }
    ]}
>
<TabItem value="get_sink">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the sink.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The random ID string that Amazon Web Services generated as part of the sink ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the sink.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags assigned to the sink.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_sinks">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the sink.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The random ID string that Amazon Web Services generated as part of the sink ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the sink.</td>
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
    <td><a href="#get_sink"><CopyableCode code="get_sink" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns complete information about one monitoring account sink. To use this operation, provide the sink ARN. To retrieve a list of sink ARNs, use ListSinks.</td>
</tr>
<tr>
    <td><a href="#list_sinks"><CopyableCode code="list_sinks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Use this operation in a monitoring account to return the list of sinks created in that account.</td>
</tr>
<tr>
    <td><a href="#create_sink"><CopyableCode code="create_sink" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Use this to create a sink in the current account, so that it can be used as a monitoring account in CloudWatch cross-account observability. A sink is a resource that represents an attachment point in a monitoring account. Source accounts can link to the sink to send observability data. After you create a sink, you must create a sink policy that allows source accounts to attach to it. For more information, see PutSinkPolicy. Each account can contain one sink per Region. If you delete a sink, you can then create a new one in that Region.</td>
</tr>
<tr>
    <td><a href="#delete_sink"><CopyableCode code="delete_sink" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a sink. You must delete all links to a sink before you can delete that sink.</td>
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
    defaultValue="get_sink"
    values={[
        { label: 'get_sink', value: 'get_sink' },
        { label: 'list_sinks', value: 'list_sinks' }
    ]}
>
<TabItem value="get_sink">

Returns complete information about one monitoring account sink. To use this operation, provide the sink ARN. To retrieve a list of sink ARNs, use ListSinks.

```sql
SELECT
Arn,
Id,
Name,
Tags
FROM aws.oam.sinks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_sinks">

Use this operation in a monitoring account to return the list of sinks created in that account.

```sql
SELECT
Arn,
Id,
Name
FROM aws.oam.sinks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_sink"
    values={[
        { label: 'create_sink', value: 'create_sink' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_sink">

Use this to create a sink in the current account, so that it can be used as a monitoring account in CloudWatch cross-account observability. A sink is a resource that represents an attachment point in a monitoring account. Source accounts can link to the sink to send observability data. After you create a sink, you must create a sink policy that allows source accounts to attach to it. For more information, see PutSinkPolicy. Each account can contain one sink per Region. If you delete a sink, you can then create a new one in that Region.

```sql
INSERT INTO aws.oam.sinks (
Name,
Tags,
region
)
SELECT 
'{{ Name }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
Arn,
Id,
Name,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: sinks
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the sinks resource.
    - name: Name
      value: "{{ Name }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_sink"
    values={[
        { label: 'delete_sink', value: 'delete_sink' }
    ]}
>
<TabItem value="delete_sink">

Deletes a sink. You must delete all links to a sink before you can delete that sink.

```sql
DELETE FROM aws.oam.sinks
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
