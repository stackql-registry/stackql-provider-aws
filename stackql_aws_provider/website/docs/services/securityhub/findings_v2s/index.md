--- 
title: findings_v2s
hide_title: false
hide_table_of_contents: false
keywords:
  - findings_v2s
  - securityhub
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

Creates, updates, deletes, gets or lists a <code>findings_v2s</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="findings_v2s" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityhub.findings_v2s" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_findings_v2"
    values={[
        { label: 'get_findings_v2', value: 'get_findings_v2' }
    ]}
>
<TabItem value="get_findings_v2">

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
    <td><CopyableCode code="finding" /></td>
    <td><code>object</code></td>
    <td>An array of security findings returned by the operation.</td>
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
    <td><a href="#get_findings_v2"><CopyableCode code="get_findings_v2" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of findings that match the specified criteria. You can use the Scopes parameter to define the data boundary for the query. Currently, Scopes supports AwsOrganizations, which lets you retrieve findings from your entire organization or from specific organizational units. Only the delegated administrator account can use Scopes. You can use the Filters parameter to refine results based on finding attributes. You can use Scopes and Filters independently or together. When both are provided, Scopes narrows the data set first, and then Filters refines results within that scoped data set. GetFindings and GetFindingsV2 both use securityhub:GetFindings in the Action element of an IAM policy statement. You must have permission to perform the securityhub:GetFindings action.</td>
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
    defaultValue="get_findings_v2"
    values={[
        { label: 'get_findings_v2', value: 'get_findings_v2' }
    ]}
>
<TabItem value="get_findings_v2">

Returns a list of findings that match the specified criteria. You can use the Scopes parameter to define the data boundary for the query. Currently, Scopes supports AwsOrganizations, which lets you retrieve findings from your entire organization or from specific organizational units. Only the delegated administrator account can use Scopes. You can use the Filters parameter to refine results based on finding attributes. You can use Scopes and Filters independently or together. When both are provided, Scopes narrows the data set first, and then Filters refines results within that scoped data set. GetFindings and GetFindingsV2 both use securityhub:GetFindings in the Action element of an IAM policy statement. You must have permission to perform the securityhub:GetFindings action.

```sql
SELECT
finding
FROM aws.securityhub.findings_v2s
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
