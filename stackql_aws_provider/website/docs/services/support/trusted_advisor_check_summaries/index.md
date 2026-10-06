--- 
title: trusted_advisor_check_summaries
hide_title: false
hide_table_of_contents: false
keywords:
  - trusted_advisor_check_summaries
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

Creates, updates, deletes, gets or lists a <code>trusted_advisor_check_summaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="trusted_advisor_check_summaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.support.trusted_advisor_check_summaries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_trusted_advisor_check_summaries"
    values={[
        { label: 'describe_trusted_advisor_check_summaries', value: 'describe_trusted_advisor_check_summaries' }
    ]}
>
<TabItem value="describe_trusted_advisor_check_summaries">

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
    <td><CopyableCode code="summaries" /></td>
    <td><code>array</code></td>
    <td>The summary information for the requested Trusted Advisor checks.</td>
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
    <td><a href="#describe_trusted_advisor_check_summaries"><CopyableCode code="describe_trusted_advisor_check_summaries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the results for the Trusted Advisor check summaries for the check IDs that you specified. You can get the check IDs by calling the DescribeTrustedAdvisorChecks operation. The response contains an array of TrustedAdvisorCheckSummary objects. You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan. If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support. To call the Trusted Advisor operations in the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland) endpoints don't support the Trusted Advisor operations. For more information, see About the Amazon Web Services Support API in the Amazon Web Services Support User Guide. Understanding the Trusted Advisor Resources processed value The Resources processed value, resourcesProcessed, usually shows both flagged resources (those with warnings or errors) and resources in good standing (ok status resources). However, some checks report flagged resources only. To understand what a specific check reports, review the detailed check information in the Trusted Advisor check reference. If you see a Green criterion listed in the Alert criteria, then the check reports all resources. If there's no Green criterion listed in the Alert criteria, then the check reports only flagged resources. For example, the Amazon EC2 Reserved Instance optimization check (cX3c2R1chu) doesn't list a Green criterion in the Alert criteria. So, this check only reports flagged resources.</td>
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
    defaultValue="describe_trusted_advisor_check_summaries"
    values={[
        { label: 'describe_trusted_advisor_check_summaries', value: 'describe_trusted_advisor_check_summaries' }
    ]}
>
<TabItem value="describe_trusted_advisor_check_summaries">

Returns the results for the Trusted Advisor check summaries for the check IDs that you specified. You can get the check IDs by calling the DescribeTrustedAdvisorChecks operation. The response contains an array of TrustedAdvisorCheckSummary objects. You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan. If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support. To call the Trusted Advisor operations in the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland) endpoints don't support the Trusted Advisor operations. For more information, see About the Amazon Web Services Support API in the Amazon Web Services Support User Guide. Understanding the Trusted Advisor Resources processed value The Resources processed value, resourcesProcessed, usually shows both flagged resources (those with warnings or errors) and resources in good standing (ok status resources). However, some checks report flagged resources only. To understand what a specific check reports, review the detailed check information in the Trusted Advisor check reference. If you see a Green criterion listed in the Alert criteria, then the check reports all resources. If there's no Green criterion listed in the Alert criteria, then the check reports only flagged resources. For example, the Amazon EC2 Reserved Instance optimization check (cX3c2R1chu) doesn't list a Green criterion in the Alert criteria. So, this check only reports flagged resources.

```sql
SELECT
summaries
FROM aws.support.trusted_advisor_check_summaries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
