--- 
title: data_access
hide_title: false
hide_table_of_contents: false
keywords:
  - data_access
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

Creates, updates, deletes, gets or lists a <code>data_access</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_access" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3control.data_access" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_access"
    values={[
        { label: 'get_data_access', value: 'get_data_access' }
    ]}
>
<TabItem value="get_data_access">

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
    <td><CopyableCode code="credentials" /></td>
    <td><code>string</code></td>
    <td>The temporary credential token that S3 Access Grants vends.</td>
</tr>
<tr>
    <td><CopyableCode code="grantee" /></td>
    <td><code>string</code></td>
    <td>The user, group, or role that was granted access to the S3 location scope. For directory identities, this API also returns the grants of the IAM role used for the identity-aware request. For more information on identity-aware sessions, see Granting permissions to use identity-aware console sessions.</td>
</tr>
<tr>
    <td><CopyableCode code="matched_grant_target" /></td>
    <td><code>string</code></td>
    <td>The S3 URI path of the data to which you are being granted temporary access credentials.</td>
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
    <td><a href="#get_data_access"><CopyableCode code="get_data_access" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-target"><code>target</code></a>, <a href="#parameter-permission"><code>permission</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-durationSeconds"><code>durationSeconds</code></a>, <a href="#parameter-privilege"><code>privilege</code></a>, <a href="#parameter-targetType"><code>targetType</code></a>, <a href="#parameter-auditContext"><code>auditContext</code></a></td>
    <td>Returns a temporary access credential from S3 Access Grants to the grantee or client application. The temporary credential is an Amazon Web Services STS token that grants them access to the S3 data. Permissions You must have the s3:GetDataAccess permission to use this operation. Additional Permissions The IAM role that S3 Access Grants assumes must have the following permissions specified in the trust policy when registering the location: sts:AssumeRole, for directory users or groups sts:SetContext, and for IAM users or roles sts:SetSourceIdentity.</td>
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
<tr id="parameter-permission">
    <td><CopyableCode code="permission" /></td>
    <td><code>string</code></td>
    <td>The type of permission granted to your S3 data, which can be set to one of the following values: READ – Grant read-only access to the S3 data. WRITE – Grant write-only access to the S3 data. READWRITE – Grant both read and write access to the S3 data.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-target">
    <td><CopyableCode code="target" /></td>
    <td><code>string</code></td>
    <td>The S3 URI path of the data to which you are requesting temporary access credentials. If the requesting account has an access grant for this data, S3 Access Grants vends temporary access credentials in the response.</td>
</tr>
<tr id="parameter-x-amz-account-id">
    <td><CopyableCode code="x-amz-account-id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the S3 Access Grants instance.</td>
</tr>
<tr id="parameter-auditContext">
    <td><CopyableCode code="auditContext" /></td>
    <td><code>string</code></td>
    <td>The context to identify the job or query associated with the credential request. This information will be displayed in CloudTrail log in your account.</td>
</tr>
<tr id="parameter-durationSeconds">
    <td><CopyableCode code="durationSeconds" /></td>
    <td><code>integer</code></td>
    <td>The session duration, in seconds, of the temporary access credential that S3 Access Grants vends to the grantee or client application. The default value is 1 hour, but the grantee can specify a range from 900 seconds (15 minutes) up to 43200 seconds (12 hours). If the grantee requests a value higher than this maximum, the operation fails.</td>
</tr>
<tr id="parameter-privilege">
    <td><CopyableCode code="privilege" /></td>
    <td><code>string</code></td>
    <td>The scope of the temporary access credential that S3 Access Grants vends to the grantee or client application. Default – The scope of the returned temporary access token is the scope of the grant that is closest to the target scope. Minimal – The scope of the returned temporary access token is the same as the requested target scope as long as the requested scope is the same as or a subset of the grant scope.</td>
</tr>
<tr id="parameter-targetType">
    <td><CopyableCode code="targetType" /></td>
    <td><code>string</code></td>
    <td>The type of Target. The only possible value is Object. Pass this value if the target data that you would like to access is a path to an object. Do not pass this value if the target data is a bucket or a bucket and a prefix.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_data_access"
    values={[
        { label: 'get_data_access', value: 'get_data_access' }
    ]}
>
<TabItem value="get_data_access">

Returns a temporary access credential from S3 Access Grants to the grantee or client application. The temporary credential is an Amazon Web Services STS token that grants them access to the S3 data. Permissions You must have the s3:GetDataAccess permission to use this operation. Additional Permissions The IAM role that S3 Access Grants assumes must have the following permissions specified in the trust policy when registering the location: sts:AssumeRole, for directory users or groups sts:SetContext, and for IAM users or roles sts:SetSourceIdentity.

```sql
SELECT
credentials,
grantee,
matched_grant_target
FROM aws.s3control.data_access
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' -- required
AND target = '{{ target }}' -- required
AND permission = '{{ permission }}' -- required
AND region = '{{ region }}' -- required
AND durationSeconds = '{{ durationSeconds }}'
AND privilege = '{{ privilege }}'
AND targetType = '{{ targetType }}'
AND auditContext = '{{ auditContext }}'
;
```
</TabItem>
</Tabs>
