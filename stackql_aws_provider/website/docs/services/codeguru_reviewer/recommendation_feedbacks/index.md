--- 
title: recommendation_feedbacks
hide_title: false
hide_table_of_contents: false
keywords:
  - recommendation_feedbacks
  - codeguru_reviewer
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

Creates, updates, deletes, gets or lists a <code>recommendation_feedbacks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="recommendation_feedbacks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codeguru_reviewer.recommendation_feedbacks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_recommendation_feedback"
    values={[
        { label: 'describe_recommendation_feedback', value: 'describe_recommendation_feedback' },
        { label: 'list_recommendation_feedback', value: 'list_recommendation_feedback' }
    ]}
>
<TabItem value="describe_recommendation_feedback">

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
    <td><CopyableCode code="code_review_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the CodeReview object. (pattern: &lt;code&gt;^arn:aws&#91;^:\s&#93;*:codeguru-reviewer:&#91;^:\s&#93;+:&#91;\d&#93;&#123;12&#125;:&#91;a-z-&#93;+:&#91;\w-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_time_stamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the feedback was created.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time_stamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the feedback was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="reactions" /></td>
    <td><code>array</code></td>
    <td>List for storing reactions. Reactions are utf-8 text code for emojis. You can send an empty list to clear off all your feedback.</td>
</tr>
<tr>
    <td><CopyableCode code="recommendation_id" /></td>
    <td><code>string</code></td>
    <td>The recommendation ID that can be used to track the provided recommendations. Later on it can be used to collect the feedback.</td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the user that made the API call. The UserId is an IAM principal that can be specified as an Amazon Web Services account ID or an Amazon Resource Name (ARN). For more information, see Specifying a Principal in the Amazon Web Services Identity and Access Management User Guide.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_recommendation_feedback">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.</td>
</tr>
<tr>
    <td><CopyableCode code="recommendation_feedback_summaries" /></td>
    <td><code>array</code></td>
    <td>Recommendation feedback summaries corresponding to the code review ARN.</td>
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
    <td><a href="#describe_recommendation_feedback"><CopyableCode code="describe_recommendation_feedback" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-code_review_arn"><code>code_review_arn</code></a>, <a href="#parameter-RecommendationId"><code>RecommendationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-UserId"><code>UserId</code></a></td>
    <td>Describes the customer feedback for a CodeGuru Reviewer recommendation.</td>
</tr>
<tr>
    <td><a href="#list_recommendation_feedback"><CopyableCode code="list_recommendation_feedback" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-code_review_arn"><code>code_review_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-UserIds"><code>UserIds</code></a>, <a href="#parameter-RecommendationIds"><code>RecommendationIds</code></a></td>
    <td>Returns a list of RecommendationFeedbackSummary objects that contain customer recommendation feedback for all CodeGuru Reviewer users.</td>
</tr>
<tr>
    <td><a href="#put_recommendation_feedback"><CopyableCode code="put_recommendation_feedback" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CodeReviewArn"><code>CodeReviewArn</code></a>, <a href="#parameter-RecommendationId"><code>RecommendationId</code></a>, <a href="#parameter-Reactions"><code>Reactions</code></a></td>
    <td></td>
    <td>Stores customer feedback for a CodeGuru Reviewer recommendation. When this API is called again with different reactions the previous feedback is overwritten.</td>
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
    <td>The recommendation ID that can be used to track the provided recommendations and then to collect the feedback.</td>
</tr>
<tr id="parameter-code_review_arn">
    <td><CopyableCode code="code_review_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the CodeReview object.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results that are returned per call. The default is 100.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.</td>
</tr>
<tr id="parameter-RecommendationIds">
    <td><CopyableCode code="RecommendationIds" /></td>
    <td><code>array</code></td>
    <td>Used to query the recommendation feedback for a given recommendation.</td>
</tr>
<tr id="parameter-UserId">
    <td><CopyableCode code="UserId" /></td>
    <td><code>string</code></td>
    <td>Optional parameter to describe the feedback for a given user. If this is not supplied, it defaults to the user making the request. The UserId is an IAM principal that can be specified as an Amazon Web Services account ID or an Amazon Resource Name (ARN). For more information, see Specifying a Principal in the Amazon Web Services Identity and Access Management User Guide.</td>
</tr>
<tr id="parameter-UserIds">
    <td><CopyableCode code="UserIds" /></td>
    <td><code>array</code></td>
    <td>An Amazon Web Services user's account ID or Amazon Resource Name (ARN). Use this ID to query the recommendation feedback for a code review from that user. The UserId is an IAM principal that can be specified as an Amazon Web Services account ID or an Amazon Resource Name (ARN). For more information, see Specifying a Principal in the Amazon Web Services Identity and Access Management User Guide.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_recommendation_feedback"
    values={[
        { label: 'describe_recommendation_feedback', value: 'describe_recommendation_feedback' },
        { label: 'list_recommendation_feedback', value: 'list_recommendation_feedback' }
    ]}
>
<TabItem value="describe_recommendation_feedback">

Describes the customer feedback for a CodeGuru Reviewer recommendation.

```sql
SELECT
code_review_arn,
created_time_stamp,
last_updated_time_stamp,
reactions,
recommendation_id,
user_id
FROM aws.codeguru_reviewer.recommendation_feedbacks
WHERE code_review_arn = '{{ code_review_arn }}' -- required
AND RecommendationId = '{{ RecommendationId }}' -- required
AND region = '{{ region }}' -- required
AND UserId = '{{ UserId }}'
;
```
</TabItem>
<TabItem value="list_recommendation_feedback">

Returns a list of RecommendationFeedbackSummary objects that contain customer recommendation feedback for all CodeGuru Reviewer users.

```sql
SELECT
next_token,
recommendation_feedback_summaries
FROM aws.codeguru_reviewer.recommendation_feedbacks
WHERE code_review_arn = '{{ code_review_arn }}' -- required
AND region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND UserIds = '{{ UserIds }}'
AND RecommendationIds = '{{ RecommendationIds }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_recommendation_feedback"
    values={[
        { label: 'put_recommendation_feedback', value: 'put_recommendation_feedback' }
    ]}
>
<TabItem value="put_recommendation_feedback">

Stores customer feedback for a CodeGuru Reviewer recommendation. When this API is called again with different reactions the previous feedback is overwritten.

```sql
REPLACE aws.codeguru_reviewer.recommendation_feedbacks
SET 
CodeReviewArn = '{{ CodeReviewArn }}',
RecommendationId = '{{ RecommendationId }}',
Reactions = '{{ Reactions }}'
WHERE 
region = '{{ region }}' --required
AND CodeReviewArn = '{{ CodeReviewArn }}' --required
AND RecommendationId = '{{ RecommendationId }}' --required
AND Reactions = '{{ Reactions }}' --required;
```
</TabItem>
</Tabs>
