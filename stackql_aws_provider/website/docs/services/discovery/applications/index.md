--- 
title: applications
hide_title: false
hide_table_of_contents: false
keywords:
  - applications
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

Creates, updates, deletes, gets or lists an <code>applications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="applications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.discovery.applications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#create_application"><CopyableCode code="create_application" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates an application with the given name and description.</td>
</tr>
<tr>
    <td><a href="#update_application"><CopyableCode code="update_application" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-configurationId"><code>configurationId</code></a></td>
    <td></td>
    <td>Updates metadata about an application.</td>
</tr>
<tr>
    <td><a href="#delete_applications"><CopyableCode code="delete_applications" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a list of applications and their associations with configuration items.</td>
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

## `INSERT` examples

<Tabs
    defaultValue="create_application"
    values={[
        { label: 'create_application', value: 'create_application' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_application">

Creates an application with the given name and description.

```sql
INSERT INTO aws.discovery.applications (
name,
description,
wave,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ wave }}',
'{{ region }}'
RETURNING
configuration_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: applications
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the applications resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the application to be created.
    - name: description
      value: "{{ description }}"
      description: |
        The description of the application to be created.
    - name: wave
      value: "{{ wave }}"
      description: |
        The name of the migration wave of the application to be created.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_application"
    values={[
        { label: 'update_application', value: 'update_application' }
    ]}
>
<TabItem value="update_application">

Updates metadata about an application.

```sql
UPDATE aws.discovery.applications
SET 
configurationId = '{{ configurationId }}',
name = '{{ name }}',
description = '{{ description }}',
wave = '{{ wave }}'
WHERE 
region = '{{ region }}' --required
AND configurationId = '{{ configurationId }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_applications"
    values={[
        { label: 'delete_applications', value: 'delete_applications' }
    ]}
>
<TabItem value="delete_applications">

Deletes a list of applications and their associations with configuration items.

```sql
DELETE FROM aws.discovery.applications
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
