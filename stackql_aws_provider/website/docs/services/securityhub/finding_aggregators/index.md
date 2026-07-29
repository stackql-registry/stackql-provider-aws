--- 
title: finding_aggregators
hide_title: false
hide_table_of_contents: false
keywords:
  - finding_aggregators
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

Creates, updates, deletes, gets or lists a <code>finding_aggregators</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="finding_aggregators" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityhub.finding_aggregators" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_finding_aggregator"
    values={[
        { label: 'get_finding_aggregator', value: 'get_finding_aggregator' },
        { label: 'list_finding_aggregators', value: 'list_finding_aggregators' }
    ]}
>
<TabItem value="get_finding_aggregator">

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
    <td><CopyableCode code="finding_aggregation_region" /></td>
    <td><code>string</code></td>
    <td>The home Region. Findings generated in linked Regions are replicated and sent to the home Region. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="finding_aggregator_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the finding aggregator. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="region_linking_mode" /></td>
    <td><code>string</code></td>
    <td>Indicates whether to link all Regions, all Regions except for a list of excluded Regions, or a list of included Regions. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="regions" /></td>
    <td><code>array</code></td>
    <td>The list of excluded Regions or included Regions.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_finding_aggregators">

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
    <td><CopyableCode code="finding_aggregator_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the finding aggregator. You use the finding aggregator ARN to retrieve details for, update, and delete the finding aggregator. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
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
    <td><a href="#get_finding_aggregator"><CopyableCode code="get_finding_aggregator" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-finding_aggregator_arn"><code>finding_aggregator_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The aggregation Region is now called the home Region. Returns the current configuration in the calling account for cross-Region aggregation. A finding aggregator is a resource that establishes the home Region and any linked Regions.</td>
</tr>
<tr>
    <td><a href="#list_finding_aggregators"><CopyableCode code="list_finding_aggregators" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>If cross-Region aggregation is enabled, then ListFindingAggregators returns the Amazon Resource Name (ARN) of the finding aggregator. You can run this operation from any Amazon Web Services Region.</td>
</tr>
<tr>
    <td><a href="#create_finding_aggregator"><CopyableCode code="create_finding_aggregator" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RegionLinkingMode"><code>RegionLinkingMode</code></a></td>
    <td></td>
    <td>The aggregation Region is now called the home Region. Used to enable cross-Region aggregation. This operation can be invoked from the home Region only. For information about how cross-Region aggregation works, see Understanding cross-Region aggregation in Security Hub CSPM in the Security Hub CSPM User Guide.</td>
</tr>
<tr>
    <td><a href="#update_finding_aggregator"><CopyableCode code="update_finding_aggregator" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FindingAggregatorArn"><code>FindingAggregatorArn</code></a>, <a href="#parameter-RegionLinkingMode"><code>RegionLinkingMode</code></a></td>
    <td></td>
    <td>The aggregation Region is now called the home Region. Updates cross-Region aggregation settings. You can use this operation to update the Region linking mode and the list of included or excluded Amazon Web Services Regions. However, you can't use this operation to change the home Region. You can invoke this operation from the current home Region only.</td>
</tr>
<tr>
    <td><a href="#delete_finding_aggregator"><CopyableCode code="delete_finding_aggregator" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-finding_aggregator_arn"><code>finding_aggregator_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The aggregation Region is now called the home Region. Deletes a finding aggregator. When you delete the finding aggregator, you stop cross-Region aggregation. Finding replication stops occurring from the linked Regions to the home Region. When you stop cross-Region aggregation, findings that were already replicated and sent to the home Region are still visible from the home Region. However, new findings and finding updates are no longer replicated and sent to the home Region.</td>
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
<tr id="parameter-finding_aggregator_arn">
    <td><CopyableCode code="finding_aggregator_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the finding aggregator to delete. To obtain the ARN, use ListFindingAggregators.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return. This operation currently only returns a single result.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned with the previous set of results. Identifies the next set of results to return.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_finding_aggregator"
    values={[
        { label: 'get_finding_aggregator', value: 'get_finding_aggregator' },
        { label: 'list_finding_aggregators', value: 'list_finding_aggregators' }
    ]}
>
<TabItem value="get_finding_aggregator">

The aggregation Region is now called the home Region. Returns the current configuration in the calling account for cross-Region aggregation. A finding aggregator is a resource that establishes the home Region and any linked Regions.

```sql
SELECT
finding_aggregation_region,
finding_aggregator_arn,
region_linking_mode,
regions
FROM aws.securityhub.finding_aggregators
WHERE finding_aggregator_arn = '{{ finding_aggregator_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_finding_aggregators">

If cross-Region aggregation is enabled, then ListFindingAggregators returns the Amazon Resource Name (ARN) of the finding aggregator. You can run this operation from any Amazon Web Services Region.

```sql
SELECT
finding_aggregator_arn
FROM aws.securityhub.finding_aggregators
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_finding_aggregator"
    values={[
        { label: 'create_finding_aggregator', value: 'create_finding_aggregator' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_finding_aggregator">

The aggregation Region is now called the home Region. Used to enable cross-Region aggregation. This operation can be invoked from the home Region only. For information about how cross-Region aggregation works, see Understanding cross-Region aggregation in Security Hub CSPM in the Security Hub CSPM User Guide.

```sql
INSERT INTO aws.securityhub.finding_aggregators (
RegionLinkingMode,
Regions,
region
)
SELECT 
'{{ RegionLinkingMode }}' /* required */,
'{{ Regions }}',
'{{ region }}'
RETURNING
finding_aggregation_region,
finding_aggregator_arn,
region_linking_mode,
regions
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: finding_aggregators
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the finding_aggregators resource.
    - name: RegionLinkingMode
      value: "{{ RegionLinkingMode }}"
    - name: Regions
      value:
        - "{{ Regions }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_finding_aggregator"
    values={[
        { label: 'update_finding_aggregator', value: 'update_finding_aggregator' }
    ]}
>
<TabItem value="update_finding_aggregator">

The aggregation Region is now called the home Region. Updates cross-Region aggregation settings. You can use this operation to update the Region linking mode and the list of included or excluded Amazon Web Services Regions. However, you can't use this operation to change the home Region. You can invoke this operation from the current home Region only.

```sql
UPDATE aws.securityhub.finding_aggregators
SET 
FindingAggregatorArn = '{{ FindingAggregatorArn }}',
RegionLinkingMode = '{{ RegionLinkingMode }}',
Regions = '{{ Regions }}'
WHERE 
region = '{{ region }}' --required
AND FindingAggregatorArn = '{{ FindingAggregatorArn }}' --required
AND RegionLinkingMode = '{{ RegionLinkingMode }}' --required
RETURNING
finding_aggregation_region,
finding_aggregator_arn,
region_linking_mode,
regions;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_finding_aggregator"
    values={[
        { label: 'delete_finding_aggregator', value: 'delete_finding_aggregator' }
    ]}
>
<TabItem value="delete_finding_aggregator">

The aggregation Region is now called the home Region. Deletes a finding aggregator. When you delete the finding aggregator, you stop cross-Region aggregation. Finding replication stops occurring from the linked Regions to the home Region. When you stop cross-Region aggregation, findings that were already replicated and sent to the home Region are still visible from the home Region. However, new findings and finding updates are no longer replicated and sent to the home Region.

```sql
DELETE FROM aws.securityhub.finding_aggregators
WHERE finding_aggregator_arn = '{{ finding_aggregator_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
