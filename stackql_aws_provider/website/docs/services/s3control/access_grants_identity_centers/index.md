--- 
title: access_grants_identity_centers
hide_title: false
hide_table_of_contents: false
keywords:
  - access_grants_identity_centers
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

Creates, updates, deletes, gets or lists an <code>access_grants_identity_centers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="access_grants_identity_centers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3control.access_grants_identity_centers" /></td></tr>
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
    <td><a href="#dissociate_access_grants_identity_center"><CopyableCode code="dissociate_access_grants_identity_center" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Dissociates the Amazon Web Services IAM Identity Center instance from the S3 Access Grants instance. Permissions You must have the s3:DissociateAccessGrantsIdentityCenter permission to use this operation. Additional Permissions You must have the sso:DeleteApplication permission to use this operation.</td>
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
<tr id="parameter-x-amz-account-id">
    <td><CopyableCode code="x-amz-account-id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the S3 Access Grants instance.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="dissociate_access_grants_identity_center"
    values={[
        { label: 'dissociate_access_grants_identity_center', value: 'dissociate_access_grants_identity_center' }
    ]}
>
<TabItem value="dissociate_access_grants_identity_center">

Dissociates the Amazon Web Services IAM Identity Center instance from the S3 Access Grants instance. Permissions You must have the s3:DissociateAccessGrantsIdentityCenter permission to use this operation. Additional Permissions You must have the sso:DeleteApplication permission to use this operation.

```sql
EXEC aws.s3control.access_grants_identity_centers.dissociate_access_grants_identity_center 
@x-amz-account-id='{{ x-amz-account-id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
