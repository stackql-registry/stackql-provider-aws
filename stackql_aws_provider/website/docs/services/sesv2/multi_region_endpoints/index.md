--- 
title: multi_region_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - multi_region_endpoints
  - sesv2
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

Creates, updates, deletes, gets or lists a <code>multi_region_endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="multi_region_endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sesv2.multi_region_endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_multi_region_endpoint"
    values={[
        { label: 'get_multi_region_endpoint', value: 'get_multi_region_endpoint' },
        { label: 'list_multi_region_endpoints', value: 'list_multi_region_endpoints' }
    ]}
>
<TabItem value="get_multi_region_endpoint">

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
    <td><CopyableCode code="CreatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time stamp of when the multi-region endpoint (global-endpoint) was created.</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointId" /></td>
    <td><code>string</code></td>
    <td>The ID of the multi-region endpoint (global-endpoint).</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointName" /></td>
    <td><code>string</code></td>
    <td>The name of the multi-region endpoint (global-endpoint). (pattern: &lt;code&gt;^&#91;\w\-_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time stamp of when the multi-region endpoint (global-endpoint) was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="Routes" /></td>
    <td><code>array</code></td>
    <td>Contains routes information for the multi-region endpoint (global-endpoint).</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the multi-region endpoint (global-endpoint). CREATING – The resource is being provisioned. READY – The resource is ready to use. FAILED – The resource failed to be provisioned. DELETING – The resource is being deleted as requested. (CREATING, READY, FAILED, DELETING)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_multi_region_endpoints">

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
    <td><CopyableCode code="CreatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time stamp of when the multi-region endpoint (global-endpoint) was created.</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointId" /></td>
    <td><code>string</code></td>
    <td>The ID of the multi-region endpoint (global-endpoint).</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointName" /></td>
    <td><code>string</code></td>
    <td>The name of the multi-region endpoint (global-endpoint). (pattern: &lt;code&gt;^&#91;\w\-_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time stamp of when the multi-region endpoint (global-endpoint) was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="Regions" /></td>
    <td><code>array</code></td>
    <td>Primary and secondary regions between which multi-region endpoint splits sending traffic.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the multi-region endpoint (global-endpoint). CREATING – The resource is being provisioned. READY – The resource is ready to use. FAILED – The resource failed to be provisioned. DELETING – The resource is being deleted as requested. (CREATING, READY, FAILED, DELETING)</td>
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
    <td><a href="#get_multi_region_endpoint"><CopyableCode code="get_multi_region_endpoint" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-endpoint_name"><code>endpoint_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Displays the multi-region endpoint (global-endpoint) configuration. Only multi-region endpoints (global-endpoints) whose primary region is the AWS-Region where operation is executed can be displayed.</td>
</tr>
<tr>
    <td><a href="#list_multi_region_endpoints"><CopyableCode code="list_multi_region_endpoints" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-PageSize"><code>PageSize</code></a></td>
    <td>List the multi-region endpoints (global-endpoints). Only multi-region endpoints (global-endpoints) whose primary region is the AWS-Region where operation is executed will be listed.</td>
</tr>
<tr>
    <td><a href="#create_multi_region_endpoint"><CopyableCode code="create_multi_region_endpoint" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EndpointName"><code>EndpointName</code></a>, <a href="#parameter-Details"><code>Details</code></a></td>
    <td></td>
    <td>Creates a multi-region endpoint (global-endpoint). The primary region is going to be the AWS-Region where the operation is executed. The secondary region has to be provided in request's parameters. From the data flow standpoint there is no difference between primary and secondary regions - sending traffic will be split equally between the two. The primary region is the region where the resource has been created and where it can be managed.</td>
</tr>
<tr>
    <td><a href="#delete_multi_region_endpoint"><CopyableCode code="delete_multi_region_endpoint" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-endpoint_name"><code>endpoint_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a multi-region endpoint (global-endpoint). Only multi-region endpoints (global-endpoints) whose primary region is the AWS-Region where operation is executed can be deleted.</td>
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
<tr id="parameter-endpoint_name">
    <td><CopyableCode code="endpoint_name" /></td>
    <td><code>string</code></td>
    <td>The name of the multi-region endpoint (global-endpoint) to be deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token returned from a previous call to ListMultiRegionEndpoints to indicate the position in the list of multi-region endpoints (global-endpoints).</td>
</tr>
<tr id="parameter-PageSize">
    <td><CopyableCode code="PageSize" /></td>
    <td><code>integer</code></td>
    <td>The number of results to show in a single call to ListMultiRegionEndpoints. If the number of results is larger than the number you specified in this parameter, the response includes a NextToken element that you can use to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_multi_region_endpoint"
    values={[
        { label: 'get_multi_region_endpoint', value: 'get_multi_region_endpoint' },
        { label: 'list_multi_region_endpoints', value: 'list_multi_region_endpoints' }
    ]}
>
<TabItem value="get_multi_region_endpoint">

Displays the multi-region endpoint (global-endpoint) configuration. Only multi-region endpoints (global-endpoints) whose primary region is the AWS-Region where operation is executed can be displayed.

```sql
SELECT
CreatedTimestamp,
EndpointId,
EndpointName,
LastUpdatedTimestamp,
Routes,
Status
FROM aws.sesv2.multi_region_endpoints
WHERE endpoint_name = '{{ endpoint_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_multi_region_endpoints">

List the multi-region endpoints (global-endpoints). Only multi-region endpoints (global-endpoints) whose primary region is the AWS-Region where operation is executed will be listed.

```sql
SELECT
CreatedTimestamp,
EndpointId,
EndpointName,
LastUpdatedTimestamp,
Regions,
Status
FROM aws.sesv2.multi_region_endpoints
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND PageSize = '{{ PageSize }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_multi_region_endpoint"
    values={[
        { label: 'create_multi_region_endpoint', value: 'create_multi_region_endpoint' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_multi_region_endpoint">

Creates a multi-region endpoint (global-endpoint). The primary region is going to be the AWS-Region where the operation is executed. The secondary region has to be provided in request's parameters. From the data flow standpoint there is no difference between primary and secondary regions - sending traffic will be split equally between the two. The primary region is the region where the resource has been created and where it can be managed.

```sql
INSERT INTO aws.sesv2.multi_region_endpoints (
EndpointName,
Details,
Tags,
region
)
SELECT 
'{{ EndpointName }}' /* required */,
'{{ Details }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
EndpointId,
Status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: multi_region_endpoints
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the multi_region_endpoints resource.
    - name: EndpointName
      value: "{{ EndpointName }}"
      description: |
        The name of the multi-region endpoint (global-endpoint).
    - name: Details
      description: |
        An object that contains configuration details of multi-region endpoint (global-endpoint).
      value:
        RoutesDetails:
          - Region: "{{ Region }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_multi_region_endpoint"
    values={[
        { label: 'delete_multi_region_endpoint', value: 'delete_multi_region_endpoint' }
    ]}
>
<TabItem value="delete_multi_region_endpoint">

Deletes a multi-region endpoint (global-endpoint). Only multi-region endpoints (global-endpoints) whose primary region is the AWS-Region where operation is executed can be deleted.

```sql
DELETE FROM aws.sesv2.multi_region_endpoints
WHERE endpoint_name = '{{ endpoint_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
