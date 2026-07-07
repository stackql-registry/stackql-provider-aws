--- 
title: organization_insights
hide_title: false
hide_table_of_contents: false
keywords:
  - organization_insights
  - devops_guru
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

Creates, updates, deletes, gets or lists an <code>organization_insights</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="organization_insights" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devops_guru.organization_insights" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="search_organization_insights"
    values={[
        { label: 'search_organization_insights', value: 'search_organization_insights' },
        { label: 'list_organization_insights', value: 'list_organization_insights' }
    ]}
>
<TabItem value="search_organization_insights">

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
    <td><CopyableCode code="AssociatedResourceArns" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Names (ARNs) of the Amazon Web Services resources that generated this insight.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the proactive insight. (pattern: &lt;code&gt;^&#91;\w-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="InsightTimeRange" /></td>
    <td><code>object</code></td>
    <td>A time ranged that specifies when the observed behavior in an insight started and ended.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the proactive insight. (pattern: &lt;code&gt;^&#91;\s\S&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PredictionTimeRange" /></td>
    <td><code>object</code></td>
    <td>The time range during which anomalous behavior in a proactive anomaly or an insight is expected to occur.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceCollection" /></td>
    <td><code>object</code></td>
    <td>A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag key. You can specify up to 500 Amazon Web Services CloudFormation stacks.</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceCollection" /></td>
    <td><code>object</code></td>
    <td>A collection of the names of Amazon Web Services services.</td>
</tr>
<tr>
    <td><CopyableCode code="Severity" /></td>
    <td><code>string</code></td>
    <td>The severity of the insight. For more information, see Understanding insight severities in the Amazon DevOps Guru User Guide. (LOW, MEDIUM, HIGH)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the proactive insight. (ONGOING, CLOSED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_organization_insights">

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
    <td><CopyableCode code="AccountId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account. (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the insight summary. (pattern: &lt;code&gt;^&#91;\w-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="InsightTimeRange" /></td>
    <td><code>object</code></td>
    <td>A time ranged that specifies when the observed behavior in an insight started and ended.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the insight summary. (pattern: &lt;code&gt;^&#91;\s\S&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OrganizationalUnitId" /></td>
    <td><code>string</code></td>
    <td>The ID of the organizational unit. (pattern: &lt;code&gt;^ou-&#91;0-9a-z&#93;&#123;4,32&#125;-&#91;a-z0-9&#93;&#123;8,32&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PredictionTimeRange" /></td>
    <td><code>object</code></td>
    <td>The time range during which anomalous behavior in a proactive anomaly or an insight is expected to occur.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceCollection" /></td>
    <td><code>object</code></td>
    <td>A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag key. You can specify up to 500 Amazon Web Services CloudFormation stacks.</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceCollection" /></td>
    <td><code>object</code></td>
    <td>A collection of the names of Amazon Web Services services.</td>
</tr>
<tr>
    <td><CopyableCode code="Severity" /></td>
    <td><code>string</code></td>
    <td>An array of severity values used to search for insights. For more information, see Understanding insight severities in the Amazon DevOps Guru User Guide. (LOW, MEDIUM, HIGH)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>An array of status values used to search for insights. (ONGOING, CLOSED)</td>
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
    <td><a href="#search_organization_insights"><CopyableCode code="search_organization_insights" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of insights in your organization. You can specify which insights are returned by their start time, one or more statuses (ONGOING, CLOSED, and CLOSED), one or more severities (LOW, MEDIUM, and HIGH), and type (REACTIVE or PROACTIVE). Use the Filters parameter to specify status and severity search parameters. Use the Type parameter to specify REACTIVE or PROACTIVE in your search.</td>
</tr>
<tr>
    <td><a href="#list_organization_insights"><CopyableCode code="list_organization_insights" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of insights associated with the account or OU Id.</td>
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
    defaultValue="search_organization_insights"
    values={[
        { label: 'search_organization_insights', value: 'search_organization_insights' },
        { label: 'list_organization_insights', value: 'list_organization_insights' }
    ]}
>
<TabItem value="search_organization_insights">

Returns a list of insights in your organization. You can specify which insights are returned by their start time, one or more statuses (ONGOING, CLOSED, and CLOSED), one or more severities (LOW, MEDIUM, and HIGH), and type (REACTIVE or PROACTIVE). Use the Filters parameter to specify status and severity search parameters. Use the Type parameter to specify REACTIVE or PROACTIVE in your search.

```sql
SELECT
AssociatedResourceArns,
Id,
InsightTimeRange,
Name,
PredictionTimeRange,
ResourceCollection,
ServiceCollection,
Severity,
Status
FROM aws.devops_guru.organization_insights
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_organization_insights">

Returns a list of insights associated with the account or OU Id.

```sql
SELECT
AccountId,
Id,
InsightTimeRange,
Name,
OrganizationalUnitId,
PredictionTimeRange,
ResourceCollection,
ServiceCollection,
Severity,
Status
FROM aws.devops_guru.organization_insights
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
