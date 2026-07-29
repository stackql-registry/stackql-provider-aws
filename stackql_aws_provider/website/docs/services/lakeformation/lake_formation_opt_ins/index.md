--- 
title: lake_formation_opt_ins
hide_title: false
hide_table_of_contents: false
keywords:
  - lake_formation_opt_ins
  - lakeformation
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

Creates, updates, deletes, gets or lists a <code>lake_formation_opt_ins</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="lake_formation_opt_ins" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lakeformation.lake_formation_opt_ins" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_lake_formation_opt_ins"
    values={[
        { label: 'list_lake_formation_opt_ins', value: 'list_lake_formation_opt_ins' }
    ]}
>
<TabItem value="list_lake_formation_opt_ins">

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
    <td><CopyableCode code="lake_formation_opt_ins_info_list" /></td>
    <td><code>array</code></td>
    <td>A list of principal-resource pairs that have Lake Formation permissins enforced.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A continuation token, if this is not the first call to retrieve this list.</td>
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
    <td><a href="#list_lake_formation_opt_ins"><CopyableCode code="list_lake_formation_opt_ins" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieve the current list of resources and principals that are opt in to enforce Lake Formation permissions.</td>
</tr>
<tr>
    <td><a href="#create_lake_formation_opt_in"><CopyableCode code="create_lake_formation_opt_in" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Principal"><code>Principal</code></a>, <a href="#parameter-Resource"><code>Resource</code></a></td>
    <td></td>
    <td>Enforce Lake Formation permissions for the given databases, tables, and principals.</td>
</tr>
<tr>
    <td><a href="#delete_lake_formation_opt_in"><CopyableCode code="delete_lake_formation_opt_in" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Remove the Lake Formation permissions enforcement of the given databases, tables, and principals.</td>
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
    defaultValue="list_lake_formation_opt_ins"
    values={[
        { label: 'list_lake_formation_opt_ins', value: 'list_lake_formation_opt_ins' }
    ]}
>
<TabItem value="list_lake_formation_opt_ins">

Retrieve the current list of resources and principals that are opt in to enforce Lake Formation permissions.

```sql
SELECT
lake_formation_opt_ins_info_list,
next_token
FROM aws.lakeformation.lake_formation_opt_ins
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_lake_formation_opt_in"
    values={[
        { label: 'create_lake_formation_opt_in', value: 'create_lake_formation_opt_in' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_lake_formation_opt_in">

Enforce Lake Formation permissions for the given databases, tables, and principals.

```sql
INSERT INTO aws.lakeformation.lake_formation_opt_ins (
Principal,
Resource,
Condition,
region
)
SELECT 
'{{ Principal }}' /* required */,
'{{ Resource }}' /* required */,
'{{ Condition }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: lake_formation_opt_ins
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the lake_formation_opt_ins resource.
    - name: Principal
      description: |
        The Lake Formation principal. Supported principals are IAM users or IAM roles.
      value:
        DataLakePrincipalIdentifier: "{{ DataLakePrincipalIdentifier }}"
    - name: Resource
      description: |
        A structure for the resource.
      value:
        Catalog:
          Id: "{{ Id }}"
        Database:
          CatalogId: "{{ CatalogId }}"
          Name: "{{ Name }}"
        Table:
          CatalogId: "{{ CatalogId }}"
          DatabaseName: "{{ DatabaseName }}"
          Name: "{{ Name }}"
          TableWildcard: "{{ TableWildcard }}"
        TableWithColumns:
          CatalogId: "{{ CatalogId }}"
          DatabaseName: "{{ DatabaseName }}"
          Name: "{{ Name }}"
          ColumnNames:
            - "{{ ColumnNames }}"
          ColumnWildcard:
            ExcludedColumnNames:
              - "{{ ExcludedColumnNames }}"
        DataLocation:
          CatalogId: "{{ CatalogId }}"
          ResourceArn: "{{ ResourceArn }}"
        DataCellsFilter:
          TableCatalogId: "{{ TableCatalogId }}"
          DatabaseName: "{{ DatabaseName }}"
          TableName: "{{ TableName }}"
          Name: "{{ Name }}"
        LFTag:
          CatalogId: "{{ CatalogId }}"
          TagKey: "{{ TagKey }}"
          TagValues:
            - "{{ TagValues }}"
        LFTagPolicy:
          CatalogId: "{{ CatalogId }}"
          ResourceType: "{{ ResourceType }}"
          Expression:
            - TagKey: "{{ TagKey }}"
              TagValues: "{{ TagValues }}"
          ExpressionName: "{{ ExpressionName }}"
        LFTagExpression:
          CatalogId: "{{ CatalogId }}"
          Name: "{{ Name }}"
    - name: Condition
      description: |
        A Lake Formation condition, which applies to permissions and opt-ins that contain an expression.
      value:
        Expression: "{{ Expression }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_lake_formation_opt_in"
    values={[
        { label: 'delete_lake_formation_opt_in', value: 'delete_lake_formation_opt_in' }
    ]}
>
<TabItem value="delete_lake_formation_opt_in">

Remove the Lake Formation permissions enforcement of the given databases, tables, and principals.

```sql
DELETE FROM aws.lakeformation.lake_formation_opt_ins
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
