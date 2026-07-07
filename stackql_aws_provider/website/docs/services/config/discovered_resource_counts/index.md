--- 
title: discovered_resource_counts
hide_title: false
hide_table_of_contents: false
keywords:
  - discovered_resource_counts
  - config
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

Creates, updates, deletes, gets or lists a <code>discovered_resource_counts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="discovered_resource_counts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.config.discovered_resource_counts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_discovered_resource_counts"
    values={[
        { label: 'get_discovered_resource_counts', value: 'get_discovered_resource_counts' }
    ]}
>
<TabItem value="get_discovered_resource_counts">

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
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The string that you use in a subsequent request to get the next page of results in a paginated response.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceCounts" /></td>
    <td><code>array</code></td>
    <td>The list of ResourceCount objects. Each object is listed in descending order by the number of resources.</td>
</tr>
<tr>
    <td><CopyableCode code="totalDiscoveredResources" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of resources that Config is recording in the region for your account. If you specify resource types in the request, Config returns only the total number of resources for those resource types. Example Config is recording three resource types in the US East (Ohio) Region for your account: 25 EC2 instances, 20 IAM users, and 15 S3 buckets, for a total of 60 resources. You make a call to the GetDiscoveredResourceCounts action and specify the resource type, "AWS::EC2::Instances", in the request. Config returns 25 for totalDiscoveredResources.</td>
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
    <td><a href="#get_discovered_resource_counts"><CopyableCode code="get_discovered_resource_counts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the resource types, the number of each resource type, and the total number of resources that Config is recording in this region for your Amazon Web Services account. Example Config is recording three resource types in the US East (Ohio) Region for your account: 25 EC2 instances, 20 IAM users, and 15 S3 buckets. You make a call to the GetDiscoveredResourceCounts action and specify that you want all resource types. Config returns the following: The resource types (EC2 instances, IAM users, and S3 buckets). The number of each resource type (25, 20, and 15). The total number of all resources (60). The response is paginated. By default, Config lists 100 ResourceCount objects on each page. You can customize this number with the limit parameter. The response includes a nextToken string. To get the next page of results, run the request again and specify the string for the nextToken parameter. If you make a call to the GetDiscoveredResourceCounts action, you might not immediately receive resource counts in the following situations: You are a new Config customer. You just enabled resource recording. It might take a few minutes for Config to record and count your resources. Wait a few minutes and then retry the GetDiscoveredResourceCounts action.</td>
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
    defaultValue="get_discovered_resource_counts"
    values={[
        { label: 'get_discovered_resource_counts', value: 'get_discovered_resource_counts' }
    ]}
>
<TabItem value="get_discovered_resource_counts">

Returns the resource types, the number of each resource type, and the total number of resources that Config is recording in this region for your Amazon Web Services account. Example Config is recording three resource types in the US East (Ohio) Region for your account: 25 EC2 instances, 20 IAM users, and 15 S3 buckets. You make a call to the GetDiscoveredResourceCounts action and specify that you want all resource types. Config returns the following: The resource types (EC2 instances, IAM users, and S3 buckets). The number of each resource type (25, 20, and 15). The total number of all resources (60). The response is paginated. By default, Config lists 100 ResourceCount objects on each page. You can customize this number with the limit parameter. The response includes a nextToken string. To get the next page of results, run the request again and specify the string for the nextToken parameter. If you make a call to the GetDiscoveredResourceCounts action, you might not immediately receive resource counts in the following situations: You are a new Config customer. You just enabled resource recording. It might take a few minutes for Config to record and count your resources. Wait a few minutes and then retry the GetDiscoveredResourceCounts action.

```sql
SELECT
nextToken,
resourceCounts,
totalDiscoveredResources
FROM aws.config.discovered_resource_counts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
