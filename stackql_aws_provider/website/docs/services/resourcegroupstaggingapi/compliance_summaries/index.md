--- 
title: compliance_summaries
hide_title: false
hide_table_of_contents: false
keywords:
  - compliance_summaries
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

Creates, updates, deletes, gets or lists a <code>compliance_summaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="compliance_summaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resourcegroupstaggingapi.compliance_summaries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_compliance_summary"
    values={[
        { label: 'get_compliance_summary', value: 'get_compliance_summary' }
    ]}
>
<TabItem value="get_compliance_summary">

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
    <td><CopyableCode code="LastUpdated" /></td>
    <td><code>string</code></td>
    <td>The timestamp that shows when this summary was generated in this Region.</td>
</tr>
<tr>
    <td><CopyableCode code="NonCompliantResources" /></td>
    <td><code>integer (int64)</code></td>
    <td>The count of noncompliant resources.</td>
</tr>
<tr>
    <td><CopyableCode code="Region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region that the summary applies to. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceType" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services resource type. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TargetId" /></td>
    <td><code>string</code></td>
    <td>The account identifier or the root identifier of the organization. If you don't know the root ID, you can call the Organizations ListRoots API. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TargetIdType" /></td>
    <td><code>string</code></td>
    <td>Whether the target is an account, an OU, or the organization root. (ACCOUNT, OU, ROOT)</td>
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
    <td><a href="#get_compliance_summary"><CopyableCode code="get_compliance_summary" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a table that shows counts of resources that are noncompliant with their tag policies. For more information on tag policies, see Tag Policies in the Organizations User Guide. You can call this operation only from the organization's management account and from the us-east-1 Region. This operation supports pagination, where the response can be sent in multiple pages. You should check the PaginationToken response parameter to determine if there are additional results available to return. Repeat the query, passing the PaginationToken response parameter value as an input to the next request until you recieve a null value. A null value for PaginationToken indicates that there are no more results waiting to be returned.</td>
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
    defaultValue="get_compliance_summary"
    values={[
        { label: 'get_compliance_summary', value: 'get_compliance_summary' }
    ]}
>
<TabItem value="get_compliance_summary">

Returns a table that shows counts of resources that are noncompliant with their tag policies. For more information on tag policies, see Tag Policies in the Organizations User Guide. You can call this operation only from the organization's management account and from the us-east-1 Region. This operation supports pagination, where the response can be sent in multiple pages. You should check the PaginationToken response parameter to determine if there are additional results available to return. Repeat the query, passing the PaginationToken response parameter value as an input to the next request until you recieve a null value. A null value for PaginationToken indicates that there are no more results waiting to be returned.

```sql
SELECT
LastUpdated,
NonCompliantResources,
Region,
ResourceType,
TargetId,
TargetIdType
FROM aws.resourcegroupstaggingapi.compliance_summaries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
