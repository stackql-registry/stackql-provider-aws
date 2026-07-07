--- 
title: review_policy_results_for_hits
hide_title: false
hide_table_of_contents: false
keywords:
  - review_policy_results_for_hits
  - mturk
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

Creates, updates, deletes, gets or lists a <code>review_policy_results_for_hits</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="review_policy_results_for_hits" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mturk.review_policy_results_for_hits" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_review_policy_results_for_hit"
    values={[
        { label: 'list_review_policy_results_for_hit', value: 'list_review_policy_results_for_hit' }
    ]}
>
<TabItem value="list_review_policy_results_for_hit">

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
    <td><CopyableCode code="AssignmentReviewPolicy" /></td>
    <td><code>object</code></td>
    <td>The name of the Assignment-level Review Policy. This contains only the PolicyName element.</td>
</tr>
<tr>
    <td><CopyableCode code="AssignmentReviewReport" /></td>
    <td><code>object</code></td>
    <td>Contains both ReviewResult and ReviewAction elements for an Assignment.</td>
</tr>
<tr>
    <td><CopyableCode code="HITId" /></td>
    <td><code>string</code></td>
    <td>The HITId of the HIT for which results have been returned. (pattern: &lt;code&gt;^&#91;A-Z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="HITReviewPolicy" /></td>
    <td><code>object</code></td>
    <td>The name of the HIT-level Review Policy. This contains only the PolicyName element.</td>
</tr>
<tr>
    <td><CopyableCode code="HITReviewReport" /></td>
    <td><code>object</code></td>
    <td>Contains both ReviewResult and ReviewAction elements for a particular HIT.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.</td>
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
    <td><a href="#list_review_policy_results_for_hit"><CopyableCode code="list_review_policy_results_for_hit" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The ListReviewPolicyResultsForHIT operation retrieves the computed results and the actions taken in the course of executing your Review Policies for a given HIT. For information about how to specify Review Policies when you call CreateHIT, see Review Policies. The ListReviewPolicyResultsForHIT operation can return results for both Assignment-level and HIT-level review results.</td>
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
    defaultValue="list_review_policy_results_for_hit"
    values={[
        { label: 'list_review_policy_results_for_hit', value: 'list_review_policy_results_for_hit' }
    ]}
>
<TabItem value="list_review_policy_results_for_hit">

The ListReviewPolicyResultsForHIT operation retrieves the computed results and the actions taken in the course of executing your Review Policies for a given HIT. For information about how to specify Review Policies when you call CreateHIT, see Review Policies. The ListReviewPolicyResultsForHIT operation can return results for both Assignment-level and HIT-level review results.

```sql
SELECT
AssignmentReviewPolicy,
AssignmentReviewReport,
HITId,
HITReviewPolicy,
HITReviewReport,
NextToken
FROM aws.mturk.review_policy_results_for_hits
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
