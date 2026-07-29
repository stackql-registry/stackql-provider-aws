--- 
title: organization_service_access_status
hide_title: false
hide_table_of_contents: false
keywords:
  - organization_service_access_status
  - networkmanager
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

Creates, updates, deletes, gets or lists an <code>organization_service_access_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="organization_service_access_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.networkmanager.organization_service_access_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_organization_service_access_status"
    values={[
        { label: 'list_organization_service_access_status', value: 'list_organization_service_access_status' }
    ]}
>
<TabItem value="list_organization_service_access_status">

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
    <td><CopyableCode code="account_status_list" /></td>
    <td><code>array</code></td>
    <td>The current service-linked role (SLR) deployment status for an Amazon Web Services Organization's accounts. This will be either SUCCEEDED or IN_PROGRESS.</td>
</tr>
<tr>
    <td><CopyableCode code="organization_aws_service_access_status" /></td>
    <td><code>string</code></td>
    <td>The status of the organization's AWS service access. This will be ENABLED or DISABLED.</td>
</tr>
<tr>
    <td><CopyableCode code="organization_id" /></td>
    <td><code>string</code></td>
    <td>The ID of an Amazon Web Services Organization. (pattern: &lt;code&gt;^o-(&#91;0-9a-f&#93;&#123;8,17&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="slr_deployment_status" /></td>
    <td><code>string</code></td>
    <td>The status of the SLR deployment for the account. This will be either SUCCEEDED or IN_PROGRESS.</td>
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
    <td><a href="#list_organization_service_access_status"><CopyableCode code="list_organization_service_access_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Gets the status of the Service Linked Role (SLR) deployment for the accounts in a given Amazon Web Services Organization.</td>
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
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_organization_service_access_status"
    values={[
        { label: 'list_organization_service_access_status', value: 'list_organization_service_access_status' }
    ]}
>
<TabItem value="list_organization_service_access_status">

Gets the status of the Service Linked Role (SLR) deployment for the accounts in a given Amazon Web Services Organization.

```sql
SELECT
account_status_list,
organization_aws_service_access_status,
organization_id,
slr_deployment_status
FROM aws.networkmanager.organization_service_access_status
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
