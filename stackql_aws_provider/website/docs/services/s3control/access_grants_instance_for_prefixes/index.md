--- 
title: access_grants_instance_for_prefixes
hide_title: false
hide_table_of_contents: false
keywords:
  - access_grants_instance_for_prefixes
  - s3control
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

Creates, updates, deletes, gets or lists an <code>access_grants_instance_for_prefixes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="access_grants_instance_for_prefixes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3control.access_grants_instance_for_prefixes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_access_grants_instance_for_prefix"
    values={[
        { label: 'get_access_grants_instance_for_prefix', value: 'get_access_grants_instance_for_prefix' }
    ]}
>
<TabItem value="get_access_grants_instance_for_prefix">

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
    <td><CopyableCode code="AccessGrantsInstanceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the S3 Access Grants instance.</td>
</tr>
<tr>
    <td><CopyableCode code="AccessGrantsInstanceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the S3 Access Grants instance. The ID is default. You can have one S3 Access Grants instance per Region per account.</td>
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
    <td><a href="#get_access_grants_instance_for_prefix"><CopyableCode code="get_access_grants_instance_for_prefix" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-s3prefix"><code>s3prefix</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieve the S3 Access Grants instance that contains a particular prefix. Permissions You must have the s3:GetAccessGrantsInstanceForPrefix permission for the caller account to use this operation. Additional Permissions The prefix owner account must grant you the following permissions to their S3 Access Grants instance: s3:GetAccessGrantsInstanceForPrefix.</td>
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
<tr id="parameter-s3prefix">
    <td><CopyableCode code="s3prefix" /></td>
    <td><code>string</code></td>
    <td>The S3 prefix of the access grants that you would like to retrieve.</td>
</tr>
<tr id="parameter-x-amz-account-id">
    <td><CopyableCode code="x-amz-account-id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that is making this request.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_access_grants_instance_for_prefix"
    values={[
        { label: 'get_access_grants_instance_for_prefix', value: 'get_access_grants_instance_for_prefix' }
    ]}
>
<TabItem value="get_access_grants_instance_for_prefix">

Retrieve the S3 Access Grants instance that contains a particular prefix. Permissions You must have the s3:GetAccessGrantsInstanceForPrefix permission for the caller account to use this operation. Additional Permissions The prefix owner account must grant you the following permissions to their S3 Access Grants instance: s3:GetAccessGrantsInstanceForPrefix.

```sql
SELECT
AccessGrantsInstanceArn,
AccessGrantsInstanceId
FROM aws.s3control.access_grants_instance_for_prefixes
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' -- required
AND s3prefix = '{{ s3prefix }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
