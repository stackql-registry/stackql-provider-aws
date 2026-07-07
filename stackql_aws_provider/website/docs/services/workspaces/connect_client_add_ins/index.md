--- 
title: connect_client_add_ins
hide_title: false
hide_table_of_contents: false
keywords:
  - connect_client_add_ins
  - workspaces
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

Creates, updates, deletes, gets or lists a <code>connect_client_add_ins</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connect_client_add_ins" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workspaces.connect_client_add_ins" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_connect_client_add_ins"
    values={[
        { label: 'describe_connect_client_add_ins', value: 'describe_connect_client_add_ins' }
    ]}
>
<TabItem value="describe_connect_client_add_ins">

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
    <td><CopyableCode code="AddIns" /></td>
    <td><code>array</code></td>
    <td>Information about client add-ins.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</td>
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
    <td><a href="#describe_connect_client_add_ins"><CopyableCode code="describe_connect_client_add_ins" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of Amazon Connect client add-ins that have been created.</td>
</tr>
<tr>
    <td><a href="#create_connect_client_add_in"><CopyableCode code="create_connect_client_add_in" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceId"><code>ResourceId</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-URL"><code>URL</code></a></td>
    <td></td>
    <td>Creates a client-add-in for Amazon Connect within a directory. You can create only one Amazon Connect client add-in within a directory. This client add-in allows WorkSpaces users to seamlessly connect to Amazon Connect.</td>
</tr>
<tr>
    <td><a href="#update_connect_client_add_in"><CopyableCode code="update_connect_client_add_in" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AddInId"><code>AddInId</code></a>, <a href="#parameter-ResourceId"><code>ResourceId</code></a></td>
    <td></td>
    <td>Updates a Amazon Connect client add-in. Use this action to update the name and endpoint URL of a Amazon Connect client add-in.</td>
</tr>
<tr>
    <td><a href="#delete_connect_client_add_in"><CopyableCode code="delete_connect_client_add_in" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a client-add-in for Amazon Connect that is configured within a directory.</td>
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
    defaultValue="describe_connect_client_add_ins"
    values={[
        { label: 'describe_connect_client_add_ins', value: 'describe_connect_client_add_ins' }
    ]}
>
<TabItem value="describe_connect_client_add_ins">

Retrieves a list of Amazon Connect client add-ins that have been created.

```sql
SELECT
AddIns,
NextToken
FROM aws.workspaces.connect_client_add_ins
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_connect_client_add_in"
    values={[
        { label: 'create_connect_client_add_in', value: 'create_connect_client_add_in' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_connect_client_add_in">

Creates a client-add-in for Amazon Connect within a directory. You can create only one Amazon Connect client add-in within a directory. This client add-in allows WorkSpaces users to seamlessly connect to Amazon Connect.

```sql
INSERT INTO aws.workspaces.connect_client_add_ins (
ResourceId,
Name,
URL,
region
)
SELECT 
'{{ ResourceId }}' /* required */,
'{{ Name }}' /* required */,
'{{ URL }}' /* required */,
'{{ region }}'
RETURNING
AddInId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: connect_client_add_ins
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the connect_client_add_ins resource.
    - name: ResourceId
      value: "{{ ResourceId }}"
      description: |
        The directory identifier for which to configure the client add-in.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the client add-in.
    - name: URL
      value: "{{ URL }}"
      description: |
        The endpoint URL of the Amazon Connect client add-in.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_connect_client_add_in"
    values={[
        { label: 'update_connect_client_add_in', value: 'update_connect_client_add_in' }
    ]}
>
<TabItem value="update_connect_client_add_in">

Updates a Amazon Connect client add-in. Use this action to update the name and endpoint URL of a Amazon Connect client add-in.

```sql
UPDATE aws.workspaces.connect_client_add_ins
SET 
AddInId = '{{ AddInId }}',
ResourceId = '{{ ResourceId }}',
Name = '{{ Name }}',
URL = '{{ URL }}'
WHERE 
region = '{{ region }}' --required
AND AddInId = '{{ AddInId }}' --required
AND ResourceId = '{{ ResourceId }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_connect_client_add_in"
    values={[
        { label: 'delete_connect_client_add_in', value: 'delete_connect_client_add_in' }
    ]}
>
<TabItem value="delete_connect_client_add_in">

Deletes a client-add-in for Amazon Connect that is configured within a directory.

```sql
DELETE FROM aws.workspaces.connect_client_add_ins
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
