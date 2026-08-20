--- 
title: failure_mode_findings
hide_title: false
hide_table_of_contents: false
keywords:
  - failure_mode_findings
  - resiliencehubv2
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

Creates, updates, deletes, gets or lists a <code>failure_mode_findings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="failure_mode_findings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resiliencehubv2.failure_mode_findings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_failure_mode_finding"
    values={[
        { label: 'get_failure_mode_finding', value: 'get_failure_mode_finding' },
        { label: 'list_failure_mode_findings', value: 'list_failure_mode_findings' }
    ]}
>
<TabItem value="get_failure_mode_finding">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the finding.</td>
</tr>
<tr>
    <td><CopyableCode code="comment" /></td>
    <td><code>string</code></td>
    <td>A user-provided comment about the finding.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Resource description.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_category" /></td>
    <td><code>string</code></td>
    <td>The failure category of the finding. (SHARED_FATE, EXCESSIVE_LOAD, EXCESSIVE_LATENCY, MISCONFIGURATION_AND_BUGS, SINGLE_POINT_OF_FAILURE)</td>
</tr>
<tr>
    <td><CopyableCode code="finding_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the finding. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-5&#93;&#91;0-9a-f&#93;&#123;3&#125;-&#91;089ab&#93;&#91;0-9a-f&#93;&#123;3&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="infrastructure_and_code_recommendations" /></td>
    <td><code>array</code></td>
    <td>Infrastructure and code recommendations to address the finding.</td>
</tr>
<tr>
    <td><CopyableCode code="observability_recommendations" /></td>
    <td><code>array</code></td>
    <td>Observability recommendations to address the finding.</td>
</tr>
<tr>
    <td><CopyableCode code="policy_component" /></td>
    <td><code>string</code></td>
    <td>The policy component associated with the finding. (AVAILABILITY_SLO, MULTI_AZ_DISASTER_RECOVERY, MULTI_REGION_DISASTER_RECOVERY, DATA_RECOVERY)</td>
</tr>
<tr>
    <td><CopyableCode code="reasoning" /></td>
    <td><code>string</code></td>
    <td>The reasoning behind the finding.</td>
</tr>
<tr>
    <td><CopyableCode code="service_functions" /></td>
    <td><code>array</code></td>
    <td>The service functions associated with the finding.</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>The severity of the finding. (LOW, MEDIUM, HIGH)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the finding. (OPEN, RESOLVED, IRRELEVANT)</td>
</tr>
<tr>
    <td><CopyableCode code="testing_recommendations" /></td>
    <td><code>array</code></td>
    <td>Testing recommendations to address the finding.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the finding was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_failure_mode_findings">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the finding.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Resource description.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_category" /></td>
    <td><code>string</code></td>
    <td>The failure category of the finding. (SHARED_FATE, EXCESSIVE_LOAD, EXCESSIVE_LATENCY, MISCONFIGURATION_AND_BUGS, SINGLE_POINT_OF_FAILURE)</td>
</tr>
<tr>
    <td><CopyableCode code="finding_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the finding. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-5&#93;&#91;0-9a-f&#93;&#123;3&#125;-&#91;089ab&#93;&#91;0-9a-f&#93;&#123;3&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policy_component" /></td>
    <td><code>string</code></td>
    <td>The policy component associated with the finding. (AVAILABILITY_SLO, MULTI_AZ_DISASTER_RECOVERY, MULTI_REGION_DISASTER_RECOVERY, DATA_RECOVERY)</td>
</tr>
<tr>
    <td><CopyableCode code="service_arn" /></td>
    <td><code>string</code></td>
    <td>ARN identifier. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;):&#91;0-9&#93;&#123;12&#125;:&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+.-&#93;&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>The severity of the finding. (LOW, MEDIUM, HIGH)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the finding. (OPEN, RESOLVED, IRRELEVANT)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the finding was last updated.</td>
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
    <td><a href="#get_failure_mode_finding"><CopyableCode code="get_failure_mode_finding" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-findingId"><code>findingId</code></a>, <a href="#parameter-serviceArn"><code>serviceArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a finding by findingId.</td>
</tr>
<tr>
    <td><a href="#list_failure_mode_findings"><CopyableCode code="list_failure_mode_findings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-serviceArn"><code>serviceArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-severity"><code>severity</code></a>, <a href="#parameter-failureCategory"><code>failureCategory</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>List findings.</td>
</tr>
<tr>
    <td><a href="#update_failure_mode_finding"><CopyableCode code="update_failure_mode_finding" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-findingId"><code>findingId</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-serviceArn"><code>serviceArn</code></a></td>
    <td></td>
    <td>Updates an existing finding.</td>
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
<tr id="parameter-findingId">
    <td><CopyableCode code="findingId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the finding to retrieve.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-serviceArn">
    <td><CopyableCode code="serviceArn" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-failureCategory">
    <td><CopyableCode code="failureCategory" /></td>
    <td><code>string</code></td>
    <td>Filter findings by failure category.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-severity">
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>Filter findings by severity.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Filter findings by status.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_failure_mode_finding"
    values={[
        { label: 'get_failure_mode_finding', value: 'get_failure_mode_finding' },
        { label: 'list_failure_mode_findings', value: 'list_failure_mode_findings' }
    ]}
>
<TabItem value="get_failure_mode_finding">

Retrieves a finding by findingId.

```sql
SELECT
name,
comment,
description,
failure_category,
finding_id,
infrastructure_and_code_recommendations,
observability_recommendations,
policy_component,
reasoning,
service_functions,
severity,
status,
testing_recommendations,
updated_at
FROM aws.resiliencehubv2.failure_mode_findings
WHERE findingId = '{{ findingId }}' -- required
AND serviceArn = '{{ serviceArn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_failure_mode_findings">

List findings.

```sql
SELECT
name,
description,
failure_category,
finding_id,
policy_component,
service_arn,
severity,
status,
updated_at
FROM aws.resiliencehubv2.failure_mode_findings
WHERE serviceArn = '{{ serviceArn }}' -- required
AND region = '{{ region }}' -- required
AND severity = '{{ severity }}'
AND failureCategory = '{{ failureCategory }}'
AND status = '{{ status }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_failure_mode_finding"
    values={[
        { label: 'update_failure_mode_finding', value: 'update_failure_mode_finding' }
    ]}
>
<TabItem value="update_failure_mode_finding">

Updates an existing finding.

```sql
UPDATE aws.resiliencehubv2.failure_mode_findings
SET 
findingId = '{{ findingId }}',
status = '{{ status }}',
serviceArn = '{{ serviceArn }}',
comment = '{{ comment }}'
WHERE 
region = '{{ region }}' --required
AND findingId = '{{ findingId }}' --required
AND status = '{{ status }}' --required
AND serviceArn = '{{ serviceArn }}' --required
RETURNING
finding;
```
</TabItem>
</Tabs>
