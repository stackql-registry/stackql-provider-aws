--- 
title: db_recommendations
hide_title: false
hide_table_of_contents: false
keywords:
  - db_recommendations
  - rds
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

Creates, updates, deletes, gets or lists a <code>db_recommendations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_recommendations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rds.db_recommendations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_db_recommendations"
    values={[
        { label: 'describe_db_recommendations', value: 'describe_db_recommendations' }
    ]}
>
<TabItem value="describe_db_recommendations">

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
    <td><CopyableCode code="AdditionalInfo" /></td>
    <td><code>string</code></td>
    <td>Additional information about the recommendation. The information might contain markdown.</td>
</tr>
<tr>
    <td><CopyableCode code="Category" /></td>
    <td><code>string</code></td>
    <td>The category of the recommendation. Valid values: performance efficiency security reliability cost optimization operational excellence sustainability</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string</code></td>
    <td>The time when the recommendation was created. For example, 2023-09-28T01:13:53.931000+00:00.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A detailed description of the recommendation. The description might contain markdown.</td>
</tr>
<tr>
    <td><CopyableCode code="Detection" /></td>
    <td><code>string</code></td>
    <td>A short description of the issue identified for this recommendation. The description might contain markdown.</td>
</tr>
<tr>
    <td><CopyableCode code="Impact" /></td>
    <td><code>string</code></td>
    <td>A short description that explains the possible impact of an issue.</td>
</tr>
<tr>
    <td><CopyableCode code="IssueDetails" /></td>
    <td><code>string</code></td>
    <td>Details of the issue that caused the recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="Links" /></td>
    <td><code>string</code></td>
    <td>A link to documentation that provides additional information about the recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="Reason" /></td>
    <td><code>string</code></td>
    <td>The reason why this recommendation was created. The information might contain markdown.</td>
</tr>
<tr>
    <td><CopyableCode code="Recommendation" /></td>
    <td><code>string</code></td>
    <td>A short description of the recommendation to resolve an issue. The description might contain markdown.</td>
</tr>
<tr>
    <td><CopyableCode code="RecommendationId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="RecommendedActions" /></td>
    <td><code>string</code></td>
    <td>A list of recommended actions.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the RDS resource associated with the recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="Severity" /></td>
    <td><code>string</code></td>
    <td>The severity level of the recommendation. The severity level can help you decide the urgency with which to address the recommendation. Valid values: high medium low informational</td>
</tr>
<tr>
    <td><CopyableCode code="Source" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services service that generated the recommendations.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the recommendation. Valid values: active - The recommendations which are ready for you to apply. pending - The applied or scheduled recommendations which are in progress. resolved - The recommendations which are completed. dismissed - The recommendations that you dismissed.</td>
</tr>
<tr>
    <td><CopyableCode code="TypeDetection" /></td>
    <td><code>string</code></td>
    <td>A short description of the recommendation type. The description might contain markdown.</td>
</tr>
<tr>
    <td><CopyableCode code="TypeId" /></td>
    <td><code>string</code></td>
    <td>A value that indicates the type of recommendation. This value determines how the description is rendered.</td>
</tr>
<tr>
    <td><CopyableCode code="TypeRecommendation" /></td>
    <td><code>string</code></td>
    <td>A short description that summarizes the recommendation to fix all the issues of the recommendation type. The description might contain markdown.</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedTime" /></td>
    <td><code>string</code></td>
    <td>The time when the recommendation was last updated.</td>
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
    <td><a href="#describe_db_recommendations"><CopyableCode code="describe_db_recommendations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-LastUpdatedAfter"><code>LastUpdatedAfter</code></a>, <a href="#parameter-LastUpdatedBefore"><code>LastUpdatedBefore</code></a>, <a href="#parameter-Locale"><code>Locale</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Describes the recommendations to resolve the issues for your DB instances, DB clusters, and DB parameter groups.</td>
</tr>
<tr>
    <td><a href="#modify_db_recommendation"><CopyableCode code="modify_db_recommendation" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-RecommendationId"><code>RecommendationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Locale"><code>Locale</code></a>, <a href="#parameter-Status"><code>Status</code></a>, <a href="#parameter-RecommendedActionUpdates"><code>RecommendedActionUpdates</code></a></td>
    <td>Updates the recommendation status and recommended action status for the specified recommendation.</td>
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
<tr id="parameter-RecommendationId">
    <td><CopyableCode code="RecommendationId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the recommendation to update.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>A filter that specifies one or more recommendations to describe. Supported Filters: recommendation-id - Accepts a list of recommendation identifiers. The results list only includes the recommendations whose identifier is one of the specified filter values. status - Accepts a list of recommendation statuses. Valid values: active - The recommendations which are ready for you to apply. pending - The applied or scheduled recommendations which are in progress. resolved - The recommendations which are completed. dismissed - The recommendations that you dismissed. The results list only includes the recommendations whose status is one of the specified filter values. severity - Accepts a list of recommendation severities. The results list only includes the recommendations whose severity is one of the specified filter values. Valid values: high medium low informational type-id - Accepts a list of recommendation type identifiers. The results list only includes the recommendations whose type is one of the specified filter values. dbi-resource-id - Accepts a list of database resource identifiers. The results list only includes the recommendations that generated for the specified databases. cluster-resource-id - Accepts a list of cluster resource identifiers. The results list only includes the recommendations that generated for the specified clusters. pg-arn - Accepts a list of parameter group ARNs. The results list only includes the recommendations that generated for the specified parameter groups. cluster-pg-arn - Accepts a list of cluster parameter group ARNs. The results list only includes the recommendations that generated for the specified cluster parameter groups.</td>
</tr>
<tr id="parameter-LastUpdatedAfter">
    <td><CopyableCode code="LastUpdatedAfter" /></td>
    <td><code>string (date-time)</code></td>
    <td>A filter to include only the recommendations that were updated after this specified time.</td>
</tr>
<tr id="parameter-LastUpdatedBefore">
    <td><CopyableCode code="LastUpdatedBefore" /></td>
    <td><code>string (date-time)</code></td>
    <td>A filter to include only the recommendations that were updated before this specified time.</td>
</tr>
<tr id="parameter-Locale">
    <td><CopyableCode code="Locale" /></td>
    <td><code>string</code></td>
    <td>The language of the modified recommendation.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous DescribeDBRecommendations request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of recommendations to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results.</td>
</tr>
<tr id="parameter-RecommendedActionUpdates">
    <td><CopyableCode code="RecommendedActionUpdates" /></td>
    <td><code>array</code></td>
    <td>The list of recommended action status to update. You can update multiple recommended actions at one time.</td>
</tr>
<tr id="parameter-Status">
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The recommendation status to update. Valid values: active dismissed</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_db_recommendations"
    values={[
        { label: 'describe_db_recommendations', value: 'describe_db_recommendations' }
    ]}
>
<TabItem value="describe_db_recommendations">

Describes the recommendations to resolve the issues for your DB instances, DB clusters, and DB parameter groups.

```sql
SELECT
AdditionalInfo,
Category,
CreatedTime,
Description,
Detection,
Impact,
IssueDetails,
Links,
Reason,
Recommendation,
RecommendationId,
RecommendedActions,
ResourceArn,
Severity,
Source,
Status,
TypeDetection,
TypeId,
TypeRecommendation,
UpdatedTime
FROM aws.rds.db_recommendations
WHERE region = '{{ region }}' -- required
AND LastUpdatedAfter = '{{ LastUpdatedAfter }}'
AND LastUpdatedBefore = '{{ LastUpdatedBefore }}'
AND Locale = '{{ Locale }}'
AND Filters = '{{ Filters }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_db_recommendation"
    values={[
        { label: 'modify_db_recommendation', value: 'modify_db_recommendation' }
    ]}
>
<TabItem value="modify_db_recommendation">

Updates the recommendation status and recommended action status for the specified recommendation.

```sql
UPDATE aws.rds.db_recommendations
SET 
-- No updatable properties
WHERE 
RecommendationId = '{{ RecommendationId }}' --required
AND region = '{{ region }}' --required
AND Locale = '{{ Locale}}'
AND Status = '{{ Status}}'
AND RecommendedActionUpdates = '{{ RecommendedActionUpdates}}'
RETURNING
AdditionalInfo,
Category,
CreatedTime,
Description,
Detection,
Impact,
IssueDetails,
Links,
Reason,
Recommendation,
RecommendationId,
RecommendedActions,
ResourceArn,
Severity,
Source,
Status,
TypeDetection,
TypeId,
TypeRecommendation,
UpdatedTime;
```
</TabItem>
</Tabs>
