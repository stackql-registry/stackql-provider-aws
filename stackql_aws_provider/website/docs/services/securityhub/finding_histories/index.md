--- 
title: finding_histories
hide_title: false
hide_table_of_contents: false
keywords:
  - finding_histories
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

Creates, updates, deletes, gets or lists a <code>finding_histories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="finding_histories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityhub.finding_histories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_finding_history"
    values={[
        { label: 'get_finding_history', value: 'get_finding_history' }
    ]}
>
<TabItem value="get_finding_history">

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
    <td><CopyableCode code="FindingCreated" /></td>
    <td><code>boolean</code></td>
    <td>Identifies whether the event marks the creation of a new finding. A value of True means that the finding is newly created. A value of False means that the finding isn’t newly created.</td>
</tr>
<tr>
    <td><CopyableCode code="FindingIdentifier" /></td>
    <td><code>object</code></td>
    <td>Identifies which finding to get the finding history for.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token for pagination purposes. Provide this token in the subsequent request to GetFindingsHistory to get up to an additional 100 results of history for the same finding that you specified in your initial request.</td>
</tr>
<tr>
    <td><CopyableCode code="UpdateSource" /></td>
    <td><code>object</code></td>
    <td>Identifies the source of the event that changed the finding. For example, an integrated Amazon Web Services service or third-party partner integration may call BatchImportFindings , or an Security Hub CSPM customer may call BatchUpdateFindings .</td>
</tr>
<tr>
    <td><CopyableCode code="UpdateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when Security Hub CSPM processed the updated finding record. For more information about the validation and formatting of timestamp fields in Security Hub CSPM, see Timestamps.</td>
</tr>
<tr>
    <td><CopyableCode code="Updates" /></td>
    <td><code>array</code></td>
    <td>An array of objects that provides details about the finding change event, including the Amazon Web Services Security Finding Format (ASFF) field that changed, the value of the field before the change, and the value of the field after the change.</td>
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
    <td><a href="#get_finding_history"><CopyableCode code="get_finding_history" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the history of a Security Hub CSPM finding. The history includes changes made to any fields in the Amazon Web Services Security Finding Format (ASFF) except top-level timestamp fields, such as the CreatedAt and UpdatedAt fields. This operation might return fewer results than the maximum number of results (MaxResults) specified in a request, even when more results are available. If this occurs, the response includes a NextToken value, which you should use to retrieve the next set of results in the response. The presence of a NextToken value in a response doesn't necessarily indicate that the results are incomplete. However, you should continue to specify a NextToken value until you receive a response that doesn't include this value.</td>
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
    defaultValue="get_finding_history"
    values={[
        { label: 'get_finding_history', value: 'get_finding_history' }
    ]}
>
<TabItem value="get_finding_history">

Returns the history of a Security Hub CSPM finding. The history includes changes made to any fields in the Amazon Web Services Security Finding Format (ASFF) except top-level timestamp fields, such as the CreatedAt and UpdatedAt fields. This operation might return fewer results than the maximum number of results (MaxResults) specified in a request, even when more results are available. If this occurs, the response includes a NextToken value, which you should use to retrieve the next set of results in the response. The presence of a NextToken value in a response doesn't necessarily indicate that the results are incomplete. However, you should continue to specify a NextToken value until you receive a response that doesn't include this value.

```sql
SELECT
FindingCreated,
FindingIdentifier,
NextToken,
UpdateSource,
UpdateTime,
Updates
FROM aws.securityhub.finding_histories
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
