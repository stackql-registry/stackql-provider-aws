--- 
title: endpoint_authorizations
hide_title: false
hide_table_of_contents: false
keywords:
  - endpoint_authorizations
  - redshift
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

Creates, updates, deletes, gets or lists an <code>endpoint_authorizations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="endpoint_authorizations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.endpoint_authorizations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_endpoint_authorization"
    values={[
        { label: 'describe_endpoint_authorization', value: 'describe_endpoint_authorization' }
    ]}
>
<TabItem value="describe_endpoint_authorization">

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
    <td><CopyableCode code="AllowedAllVPCs" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether all VPCs in the grantee account are allowed access to the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="AllowedVPCs" /></td>
    <td><code>string</code></td>
    <td>The VPCs allowed access to the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="AuthorizeTime" /></td>
    <td><code>string</code></td>
    <td>The time (UTC) when the authorization was created.</td>
</tr>
<tr>
    <td><CopyableCode code="ClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The cluster identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="ClusterStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointCount" /></td>
    <td><code>integer</code></td>
    <td>The number of Redshift-managed VPC endpoints created for the authorization.</td>
</tr>
<tr>
    <td><CopyableCode code="Grantee" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the grantee of the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="Grantor" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the cluster owner.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the authorization action.</td>
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
    <td><a href="#describe_endpoint_authorization"><CopyableCode code="describe_endpoint_authorization" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-Account"><code>Account</code></a>, <a href="#parameter-Grantee"><code>Grantee</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Describes an endpoint authorization.</td>
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
<tr id="parameter-Account">
    <td><CopyableCode code="Account" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of either the cluster owner (grantor) or grantee. If Grantee parameter is true, then the Account value is of the grantor.</td>
</tr>
<tr id="parameter-ClusterIdentifier">
    <td><CopyableCode code="ClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The cluster identifier of the cluster to access.</td>
</tr>
<tr id="parameter-Grantee">
    <td><CopyableCode code="Grantee" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether to check authorization from a grantor or grantee point of view. If true, Amazon Redshift returns endpoint authorizations that you've been granted. If false (default), checks authorization from a grantor point of view.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous DescribeEndpointAuthorization request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by the MaxRecords parameter.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a Marker is included in the response so that the remaining results can be retrieved.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_endpoint_authorization"
    values={[
        { label: 'describe_endpoint_authorization', value: 'describe_endpoint_authorization' }
    ]}
>
<TabItem value="describe_endpoint_authorization">

Describes an endpoint authorization.

```sql
SELECT
AllowedAllVPCs,
AllowedVPCs,
AuthorizeTime,
ClusterIdentifier,
ClusterStatus,
EndpointCount,
Grantee,
Grantor,
Status
FROM aws.redshift.endpoint_authorizations
WHERE region = '{{ region }}' -- required
AND ClusterIdentifier = '{{ ClusterIdentifier }}'
AND Account = '{{ Account }}'
AND Grantee = '{{ Grantee }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>
