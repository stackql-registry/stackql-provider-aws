--- 
title: caller_access_grants
hide_title: false
hide_table_of_contents: false
keywords:
  - caller_access_grants
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

Creates, updates, deletes, gets or lists a <code>caller_access_grants</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="caller_access_grants" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3control.caller_access_grants" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_caller_access_grants"
    values={[
        { label: 'list_caller_access_grants', value: 'list_caller_access_grants' }
    ]}
>
<TabItem value="list_caller_access_grants">

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
    <td><CopyableCode code="ApplicationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of an Amazon Web Services IAM Identity Center application associated with your Identity Center instance. If the grant includes an application ARN, the grantee can only access the S3 data through this application.</td>
</tr>
<tr>
    <td><CopyableCode code="GrantScope" /></td>
    <td><code>string</code></td>
    <td>The S3 path of the data to which you have been granted access.</td>
</tr>
<tr>
    <td><CopyableCode code="Permission" /></td>
    <td><code>string</code></td>
    <td>The type of permission granted, which can be one of the following values: READ - Grants read-only access to the S3 data. WRITE - Grants write-only access to the S3 data. READWRITE - Grants both read and write access to the S3 data.</td>
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
    <td><a href="#list_caller_access_grants"><CopyableCode code="list_caller_access_grants" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-grantscope"><code>grantscope</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-allowedByApplication"><code>allowedByApplication</code></a></td>
    <td>Use this API to list the access grants that grant the caller access to Amazon S3 data through S3 Access Grants. The caller (grantee) can be an Identity and Access Management (IAM) identity or Amazon Web Services Identity Center corporate directory identity. You must pass the Amazon Web Services account of the S3 data owner (grantor) in the request. You can, optionally, narrow the results by GrantScope, using a fragment of the data's S3 path, and S3 Access Grants will return only the grants with a path that contains the path fragment. You can also pass the AllowedByApplication filter in the request, which returns only the grants authorized for applications, whether the application is the caller's Identity Center application or any other application (ALL). For more information, see List the caller's access grants in the Amazon S3 User Guide. Permissions You must have the s3:ListCallerAccessGrants permission to use this operation.</td>
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
<tr id="parameter-allowedByApplication">
    <td><CopyableCode code="allowedByApplication" /></td>
    <td><code>boolean</code></td>
    <td>If this optional parameter is passed in the request, a filter is applied to the results. The results will include only the access grants for the caller's Identity Center application or for any other applications (ALL).</td>
</tr>
<tr id="parameter-grantscope">
    <td><CopyableCode code="grantscope" /></td>
    <td><code>string</code></td>
    <td>The S3 path of the data that you would like to access. Must start with s3:​//. You can optionally pass only the beginning characters of a path, and S3 Access Grants will search for all applicable grants for the path fragment.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of access grants that you would like returned in the List Caller Access Grants response. If the results include the pagination token NextToken, make another call using the NextToken to determine if there are more results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token to request the next page of results. Pass this value into a subsequent List Caller Access Grants request in order to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_caller_access_grants"
    values={[
        { label: 'list_caller_access_grants', value: 'list_caller_access_grants' }
    ]}
>
<TabItem value="list_caller_access_grants">

Use this API to list the access grants that grant the caller access to Amazon S3 data through S3 Access Grants. The caller (grantee) can be an Identity and Access Management (IAM) identity or Amazon Web Services Identity Center corporate directory identity. You must pass the Amazon Web Services account of the S3 data owner (grantor) in the request. You can, optionally, narrow the results by GrantScope, using a fragment of the data's S3 path, and S3 Access Grants will return only the grants with a path that contains the path fragment. You can also pass the AllowedByApplication filter in the request, which returns only the grants authorized for applications, whether the application is the caller's Identity Center application or any other application (ALL). For more information, see List the caller's access grants in the Amazon S3 User Guide. Permissions You must have the s3:ListCallerAccessGrants permission to use this operation.

```sql
SELECT
ApplicationArn,
GrantScope,
Permission
FROM aws.s3control.caller_access_grants
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' -- required
AND region = '{{ region }}' -- required
AND grantscope = '{{ grantscope }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND allowedByApplication = '{{ allowedByApplication }}'
;
```
</TabItem>
</Tabs>
