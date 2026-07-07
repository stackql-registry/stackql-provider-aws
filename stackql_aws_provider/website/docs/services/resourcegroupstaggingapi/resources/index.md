--- 
title: resources
hide_title: false
hide_table_of_contents: false
keywords:
  - resources
  - resourcegroupstaggingapi
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

Creates, updates, deletes, gets or lists a <code>resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resourcegroupstaggingapi.resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resources"
    values={[
        { label: 'get_resources', value: 'get_resources' }
    ]}
>
<TabItem value="get_resources">

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
    <td><CopyableCode code="ComplianceDetails" /></td>
    <td><code>object</code></td>
    <td>Information that shows whether a resource is compliant with the effective tag policy, including details on any noncompliant tag keys.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceARN" /></td>
    <td><code>string</code></td>
    <td>The ARN of the resource. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>The tags that have been applied to one or more Amazon Web Services resources.</td>
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
    <td><a href="#get_resources"><CopyableCode code="get_resources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns all the tagged or previously tagged resources that are located in the specified Amazon Web Services Region for the account. Depending on what information you want returned, you can also specify the following: Filters that specify what tags and resource types you want returned. The response includes all tags that are associated with the requested resources. Information about compliance with the account's effective tag policy. For more information on tag policies, see Tag Policies in the Organizations User Guide. This operation supports pagination, where the response can be sent in multiple pages. You should check the PaginationToken response parameter to determine if there are additional results available to return. Repeat the query, passing the PaginationToken response parameter value as an input to the next request until you recieve a null value. A null value for PaginationToken indicates that there are no more results waiting to be returned. GetResources does not return untagged resources. To find untagged resources in your account, use Amazon Web Services Resource Explorer with a query that uses tag:none. For more information, see Search query syntax reference for Resource Explorer.</td>
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
    defaultValue="get_resources"
    values={[
        { label: 'get_resources', value: 'get_resources' }
    ]}
>
<TabItem value="get_resources">

Returns all the tagged or previously tagged resources that are located in the specified Amazon Web Services Region for the account. Depending on what information you want returned, you can also specify the following: Filters that specify what tags and resource types you want returned. The response includes all tags that are associated with the requested resources. Information about compliance with the account's effective tag policy. For more information on tag policies, see Tag Policies in the Organizations User Guide. This operation supports pagination, where the response can be sent in multiple pages. You should check the PaginationToken response parameter to determine if there are additional results available to return. Repeat the query, passing the PaginationToken response parameter value as an input to the next request until you recieve a null value. A null value for PaginationToken indicates that there are no more results waiting to be returned. GetResources does not return untagged resources. To find untagged resources in your account, use Amazon Web Services Resource Explorer with a query that uses tag:none. For more information, see Search query syntax reference for Resource Explorer.

```sql
SELECT
ComplianceDetails,
ResourceARN,
Tags
FROM aws.resourcegroupstaggingapi.resources
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
