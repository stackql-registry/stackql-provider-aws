--- 
title: endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - endpoints
  - iot
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

Creates, updates, deletes, gets or lists an <code>endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_endpoint"
    values={[
        { label: 'describe_endpoint', value: 'describe_endpoint' }
    ]}
>
<TabItem value="describe_endpoint">

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
    <td><CopyableCode code="endpoint_address" /></td>
    <td><code>string</code></td>
    <td>The endpoint. The format of the endpoint is as follows: identifier.iot.region.amazonaws.com.</td>
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
    <td><a href="#describe_endpoint"><CopyableCode code="describe_endpoint" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-endpointType"><code>endpointType</code></a></td>
    <td>Returns or creates a unique endpoint specific to the Amazon Web Services account making the call. The first time DescribeEndpoint is called, an endpoint is created. All subsequent calls to DescribeEndpoint return the same endpoint. Requires permission to access the DescribeEndpoint action.</td>
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
<tr id="parameter-endpointType">
    <td><CopyableCode code="endpointType" /></td>
    <td><code>string</code></td>
    <td>The endpoint type. Valid endpoint types include: iot:Data - Returns a VeriSign signed data endpoint. iot:Data-ATS - Returns an ATS signed data endpoint. iot:CredentialProvider - Returns an IoT credentials provider API endpoint. iot:Jobs - Returns an IoT device management Jobs API endpoint. We strongly recommend that customers use the newer iot:Data-ATS endpoint type to avoid issues related to the widespread distrust of Symantec certificate authorities. ATS Signed Certificates are more secure and are trusted by most popular browsers.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_endpoint"
    values={[
        { label: 'describe_endpoint', value: 'describe_endpoint' }
    ]}
>
<TabItem value="describe_endpoint">

Returns or creates a unique endpoint specific to the Amazon Web Services account making the call. The first time DescribeEndpoint is called, an endpoint is created. All subsequent calls to DescribeEndpoint return the same endpoint. Requires permission to access the DescribeEndpoint action.

```sql
SELECT
endpoint_address
FROM aws.iot.endpoints
WHERE region = '{{ region }}' -- required
AND endpointType = '{{ endpointType }}'
;
```
</TabItem>
</Tabs>
