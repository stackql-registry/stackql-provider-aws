--- 
title: iam_role_from_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - iam_role_from_resources
  - odb
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

Creates, updates, deletes, gets or lists an <code>iam_role_from_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="iam_role_from_resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.odb.iam_role_from_resources" /></td></tr>
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
    <td><a href="#disassociate_iam_role_from_resource"><CopyableCode code="disassociate_iam_role_from_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-iamRoleArn"><code>iamRoleArn</code></a>, <a href="#parameter-awsIntegration"><code>awsIntegration</code></a>, <a href="#parameter-resourceArn"><code>resourceArn</code></a></td>
    <td></td>
    <td>Disassociates an Amazon Web Services Identity and Access Management (IAM) service role from a specified resource to disable Amazon Web Services service integration.</td>
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

## `UPDATE` examples

<Tabs
    defaultValue="disassociate_iam_role_from_resource"
    values={[
        { label: 'disassociate_iam_role_from_resource', value: 'disassociate_iam_role_from_resource' }
    ]}
>
<TabItem value="disassociate_iam_role_from_resource">

Disassociates an Amazon Web Services Identity and Access Management (IAM) service role from a specified resource to disable Amazon Web Services service integration.

```sql
UPDATE aws.odb.iam_role_from_resources
SET 
iamRoleArn = '{{ iamRoleArn }}',
awsIntegration = '{{ awsIntegration }}',
resourceArn = '{{ resourceArn }}'
WHERE 
region = '{{ region }}' --required
AND iamRoleArn = '{{ iamRoleArn }}' --required
AND awsIntegration = '{{ awsIntegration }}' --required
AND resourceArn = '{{ resourceArn }}' --required;
```
</TabItem>
</Tabs>
