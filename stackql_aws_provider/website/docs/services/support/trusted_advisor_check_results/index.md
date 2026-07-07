--- 
title: trusted_advisor_check_results
hide_title: false
hide_table_of_contents: false
keywords:
  - trusted_advisor_check_results
  - support
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

Creates, updates, deletes, gets or lists a <code>trusted_advisor_check_results</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="trusted_advisor_check_results" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.support.trusted_advisor_check_results" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_trusted_advisor_check_result"
    values={[
        { label: 'describe_trusted_advisor_check_result', value: 'describe_trusted_advisor_check_result' }
    ]}
>
<TabItem value="describe_trusted_advisor_check_result">

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
    <td><CopyableCode code="categorySpecificSummary" /></td>
    <td><code>object</code></td>
    <td>Summary information that relates to the category of the check. Cost Optimizing is the only category that is currently supported.</td>
</tr>
<tr>
    <td><CopyableCode code="checkId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the Trusted Advisor check.</td>
</tr>
<tr>
    <td><CopyableCode code="flaggedResources" /></td>
    <td><code>array</code></td>
    <td>The details about each resource listed in the check result.</td>
</tr>
<tr>
    <td><CopyableCode code="resourcesSummary" /></td>
    <td><code>object</code></td>
    <td>Details about Amazon Web Services resources that were analyzed in a call to Trusted Advisor DescribeTrustedAdvisorCheckSummaries.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The alert status of the check: "ok" (green), "warning" (yellow), "error" (red), or "not_available".</td>
</tr>
<tr>
    <td><CopyableCode code="timestamp" /></td>
    <td><code>string</code></td>
    <td>The time of the last refresh of the check.</td>
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
    <td><a href="#describe_trusted_advisor_check_result"><CopyableCode code="describe_trusted_advisor_check_result" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the results of the Trusted Advisor check that has the specified check ID. You can get the check IDs by calling the DescribeTrustedAdvisorChecks operation. The response contains a TrustedAdvisorCheckResult object, which contains these three objects: TrustedAdvisorCategorySpecificSummary TrustedAdvisorResourceDetail TrustedAdvisorResourcesSummary In addition, the response contains these fields: status - The alert status of the check can be ok (green), warning (yellow), error (red), or not_available. timestamp - The time of the last refresh of the check. checkId - The unique identifier for the check. You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support. To call the Trusted Advisor operations in the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland) endpoints don't support the Trusted Advisor operations. For more information, see About the Amazon Web Services Support API in the Amazon Web Services Support User Guide.</td>
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
    defaultValue="describe_trusted_advisor_check_result"
    values={[
        { label: 'describe_trusted_advisor_check_result', value: 'describe_trusted_advisor_check_result' }
    ]}
>
<TabItem value="describe_trusted_advisor_check_result">

Returns the results of the Trusted Advisor check that has the specified check ID. You can get the check IDs by calling the DescribeTrustedAdvisorChecks operation. The response contains a TrustedAdvisorCheckResult object, which contains these three objects: TrustedAdvisorCategorySpecificSummary TrustedAdvisorResourceDetail TrustedAdvisorResourcesSummary In addition, the response contains these fields: status - The alert status of the check can be ok (green), warning (yellow), error (red), or not_available. timestamp - The time of the last refresh of the check. checkId - The unique identifier for the check. You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support. To call the Trusted Advisor operations in the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland) endpoints don't support the Trusted Advisor operations. For more information, see About the Amazon Web Services Support API in the Amazon Web Services Support User Guide.

```sql
SELECT
categorySpecificSummary,
checkId,
flaggedResources,
resourcesSummary,
status,
timestamp
FROM aws.support.trusted_advisor_check_results
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
