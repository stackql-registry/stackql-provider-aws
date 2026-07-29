--- 
title: recommenders
hide_title: false
hide_table_of_contents: false
keywords:
  - recommenders
  - personalize
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

Creates, updates, deletes, gets or lists a <code>recommenders</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="recommenders" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.personalize.recommenders" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_recommender"
    values={[
        { label: 'describe_recommender', value: 'describe_recommender' },
        { label: 'list_recommenders', value: 'list_recommenders' }
    ]}
>
<TabItem value="describe_recommender">

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
    <td>The name of the recommender. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9\-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time (in Unix format) that the recommender was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_group_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Domain dataset group that contains the recommender. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>If a recommender fails, the reason behind the failure.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time (in Unix format) that the recommender was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_recommender_update" /></td>
    <td><code>object</code></td>
    <td>Provides a summary of the latest updates to the recommender.</td>
</tr>
<tr>
    <td><CopyableCode code="model_metrics" /></td>
    <td><code>object</code></td>
    <td>Provides evaluation metrics that help you determine the performance of a recommender. For more information, see Evaluating a recommender.</td>
</tr>
<tr>
    <td><CopyableCode code="recipe_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the recipe (Domain dataset group use case) that the recommender was created for. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recommender_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the recommender. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recommender_config" /></td>
    <td><code>object</code></td>
    <td>The configuration details of the recommender.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the recommender. A recommender can be in one of the following states: CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED STOP PENDING &gt; STOP IN_PROGRESS &gt; INACTIVE &gt; START PENDING &gt; START IN_PROGRESS &gt; ACTIVE DELETE PENDING &gt; DELETE IN_PROGRESS</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_recommenders">

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
    <td>The name of the recommender. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9\-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time (in Unix format) that the recommender was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_group_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Domain dataset group that contains the recommender. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time (in Unix format) that the recommender was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="recipe_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the recipe (Domain dataset group use case) that the recommender was created for. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recommender_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the recommender. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recommender_config" /></td>
    <td><code>object</code></td>
    <td>The configuration details of the recommender.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the recommender. A recommender can be in one of the following states: CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED STOP PENDING &gt; STOP IN_PROGRESS &gt; INACTIVE &gt; START PENDING &gt; START IN_PROGRESS &gt; ACTIVE DELETE PENDING &gt; DELETE IN_PROGRESS</td>
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
    <td><a href="#describe_recommender"><CopyableCode code="describe_recommender" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the given recommender, including its status. A recommender can be in one of the following states: CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED STOP PENDING &gt; STOP IN_PROGRESS &gt; INACTIVE &gt; START PENDING &gt; START IN_PROGRESS &gt; ACTIVE DELETE PENDING &gt; DELETE IN_PROGRESS When the status is CREATE FAILED, the response includes the failureReason key, which describes why. The modelMetrics key is null when the recommender is being created or deleted. For more information on recommenders, see CreateRecommender.</td>
</tr>
<tr>
    <td><a href="#list_recommenders"><CopyableCode code="list_recommenders" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of recommenders in a given Domain dataset group. When a Domain dataset group is not specified, all the recommenders associated with the account are listed. The response provides the properties for each recommender, including the Amazon Resource Name (ARN). For more information on recommenders, see CreateRecommender.</td>
</tr>
<tr>
    <td><a href="#create_recommender"><CopyableCode code="create_recommender" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-datasetGroupArn"><code>datasetGroupArn</code></a>, <a href="#parameter-recipeArn"><code>recipeArn</code></a></td>
    <td></td>
    <td>Creates a recommender with the recipe (a Domain dataset group use case) you specify. You create recommenders for a Domain dataset group and specify the recommender's Amazon Resource Name (ARN) when you make a GetRecommendations request. Minimum recommendation requests per second A high minRecommendationRequestsPerSecond will increase your bill. We recommend starting with 1 for minRecommendationRequestsPerSecond (the default). Track your usage using Amazon CloudWatch metrics, and increase the minRecommendationRequestsPerSecond as necessary. When you create a recommender, you can configure the recommender's minimum recommendation requests per second. The minimum recommendation requests per second (minRecommendationRequestsPerSecond) specifies the baseline recommendation request throughput provisioned by Amazon Personalize. The default minRecommendationRequestsPerSecond is 1. A recommendation request is a single GetRecommendations operation. Request throughput is measured in requests per second and Amazon Personalize uses your requests per second to derive your requests per hour and the price of your recommender usage. If your requests per second increases beyond minRecommendationRequestsPerSecond, Amazon Personalize auto-scales the provisioned capacity up and down, but never below minRecommendationRequestsPerSecond. There's a short time delay while the capacity is increased that might cause loss of requests. Your bill is the greater of either the minimum requests per hour (based on minRecommendationRequestsPerSecond) or the actual number of requests. The actual request throughput used is calculated as the average requests/second within a one-hour window. We recommend starting with the default minRecommendationRequestsPerSecond, track your usage using Amazon CloudWatch metrics, and then increase the minRecommendationRequestsPerSecond as necessary. Status A recommender can be in one of the following states: CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED STOP PENDING &gt; STOP IN_PROGRESS &gt; INACTIVE &gt; START PENDING &gt; START IN_PROGRESS &gt; ACTIVE DELETE PENDING &gt; DELETE IN_PROGRESS To get the recommender status, call DescribeRecommender. Wait until the status of the recommender is ACTIVE before asking the recommender for recommendations. Related APIs ListRecommenders DescribeRecommender UpdateRecommender DeleteRecommender</td>
</tr>
<tr>
    <td><a href="#update_recommender"><CopyableCode code="update_recommender" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-recommenderArn"><code>recommenderArn</code></a>, <a href="#parameter-recommenderConfig"><code>recommenderConfig</code></a></td>
    <td></td>
    <td>Updates the recommender to modify the recommender configuration. If you update the recommender to modify the columns used in training, Amazon Personalize automatically starts a full retraining of the models backing your recommender. While the update completes, you can still get recommendations from the recommender. The recommender uses the previous configuration until the update completes. To track the status of this update, use the latestRecommenderUpdate returned in the DescribeRecommender operation.</td>
</tr>
<tr>
    <td><a href="#delete_recommender"><CopyableCode code="delete_recommender" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deactivates and removes a recommender. A deleted recommender can no longer be specified in a GetRecommendations request.</td>
</tr>
<tr>
    <td><a href="#start_recommender"><CopyableCode code="start_recommender" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-recommenderArn"><code>recommenderArn</code></a></td>
    <td></td>
    <td>Starts a recommender that is INACTIVE. Starting a recommender does not create any new models, but resumes billing and automatic retraining for the recommender.</td>
</tr>
<tr>
    <td><a href="#stop_recommender"><CopyableCode code="stop_recommender" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-recommenderArn"><code>recommenderArn</code></a></td>
    <td></td>
    <td>Stops a recommender that is ACTIVE. Stopping a recommender halts billing and automatic retraining for the recommender.</td>
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
    defaultValue="describe_recommender"
    values={[
        { label: 'describe_recommender', value: 'describe_recommender' },
        { label: 'list_recommenders', value: 'list_recommenders' }
    ]}
>
<TabItem value="describe_recommender">

Describes the given recommender, including its status. A recommender can be in one of the following states: CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED STOP PENDING &gt; STOP IN_PROGRESS &gt; INACTIVE &gt; START PENDING &gt; START IN_PROGRESS &gt; ACTIVE DELETE PENDING &gt; DELETE IN_PROGRESS When the status is CREATE FAILED, the response includes the failureReason key, which describes why. The modelMetrics key is null when the recommender is being created or deleted. For more information on recommenders, see CreateRecommender.

```sql
SELECT
name,
creation_date_time,
dataset_group_arn,
failure_reason,
last_updated_date_time,
latest_recommender_update,
model_metrics,
recipe_arn,
recommender_arn,
recommender_config,
status
FROM aws.personalize.recommenders
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_recommenders">

Returns a list of recommenders in a given Domain dataset group. When a Domain dataset group is not specified, all the recommenders associated with the account are listed. The response provides the properties for each recommender, including the Amazon Resource Name (ARN). For more information on recommenders, see CreateRecommender.

```sql
SELECT
name,
creation_date_time,
dataset_group_arn,
last_updated_date_time,
recipe_arn,
recommender_arn,
recommender_config,
status
FROM aws.personalize.recommenders
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_recommender"
    values={[
        { label: 'create_recommender', value: 'create_recommender' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_recommender">

Creates a recommender with the recipe (a Domain dataset group use case) you specify. You create recommenders for a Domain dataset group and specify the recommender's Amazon Resource Name (ARN) when you make a GetRecommendations request. Minimum recommendation requests per second A high minRecommendationRequestsPerSecond will increase your bill. We recommend starting with 1 for minRecommendationRequestsPerSecond (the default). Track your usage using Amazon CloudWatch metrics, and increase the minRecommendationRequestsPerSecond as necessary. When you create a recommender, you can configure the recommender's minimum recommendation requests per second. The minimum recommendation requests per second (minRecommendationRequestsPerSecond) specifies the baseline recommendation request throughput provisioned by Amazon Personalize. The default minRecommendationRequestsPerSecond is 1. A recommendation request is a single GetRecommendations operation. Request throughput is measured in requests per second and Amazon Personalize uses your requests per second to derive your requests per hour and the price of your recommender usage. If your requests per second increases beyond minRecommendationRequestsPerSecond, Amazon Personalize auto-scales the provisioned capacity up and down, but never below minRecommendationRequestsPerSecond. There's a short time delay while the capacity is increased that might cause loss of requests. Your bill is the greater of either the minimum requests per hour (based on minRecommendationRequestsPerSecond) or the actual number of requests. The actual request throughput used is calculated as the average requests/second within a one-hour window. We recommend starting with the default minRecommendationRequestsPerSecond, track your usage using Amazon CloudWatch metrics, and then increase the minRecommendationRequestsPerSecond as necessary. Status A recommender can be in one of the following states: CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED STOP PENDING &gt; STOP IN_PROGRESS &gt; INACTIVE &gt; START PENDING &gt; START IN_PROGRESS &gt; ACTIVE DELETE PENDING &gt; DELETE IN_PROGRESS To get the recommender status, call DescribeRecommender. Wait until the status of the recommender is ACTIVE before asking the recommender for recommendations. Related APIs ListRecommenders DescribeRecommender UpdateRecommender DeleteRecommender

```sql
INSERT INTO aws.personalize.recommenders (
name,
datasetGroupArn,
recipeArn,
recommenderConfig,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ datasetGroupArn }}' /* required */,
'{{ recipeArn }}' /* required */,
'{{ recommenderConfig }}',
'{{ tags }}',
'{{ region }}'
RETURNING
recommender_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: recommenders
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the recommenders resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the recommender.
    - name: datasetGroupArn
      value: "{{ datasetGroupArn }}"
      description: |
        The Amazon Resource Name (ARN) of the destination domain dataset group for the recommender.
    - name: recipeArn
      value: "{{ recipeArn }}"
      description: |
        The Amazon Resource Name (ARN) of the recipe that the recommender will use. For a recommender, a recipe is a Domain dataset group use case. Only Domain dataset group use cases can be used to create a recommender. For information about use cases see Choosing recommender use cases.
    - name: recommenderConfig
      description: |
        The configuration details of the recommender.
      value:
        itemExplorationConfig: "{{ itemExplorationConfig }}"
        minRecommendationRequestsPerSecond: {{ minRecommendationRequestsPerSecond }}
        trainingDataConfig:
          excludedDatasetColumns: "{{ excludedDatasetColumns }}"
          includedDatasetColumns: "{{ includedDatasetColumns }}"
        enableMetadataWithRecommendations: {{ enableMetadataWithRecommendations }}
    - name: tags
      description: |
        A list of tags to apply to the recommender.
      value:
        - tagKey: "{{ tagKey }}"
          tagValue: "{{ tagValue }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_recommender"
    values={[
        { label: 'update_recommender', value: 'update_recommender' }
    ]}
>
<TabItem value="update_recommender">

Updates the recommender to modify the recommender configuration. If you update the recommender to modify the columns used in training, Amazon Personalize automatically starts a full retraining of the models backing your recommender. While the update completes, you can still get recommendations from the recommender. The recommender uses the previous configuration until the update completes. To track the status of this update, use the latestRecommenderUpdate returned in the DescribeRecommender operation.

```sql
UPDATE aws.personalize.recommenders
SET 
recommenderArn = '{{ recommenderArn }}',
recommenderConfig = '{{ recommenderConfig }}'
WHERE 
region = '{{ region }}' --required
AND recommenderArn = '{{ recommenderArn }}' --required
AND recommenderConfig = '{{ recommenderConfig }}' --required
RETURNING
recommender_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_recommender"
    values={[
        { label: 'delete_recommender', value: 'delete_recommender' }
    ]}
>
<TabItem value="delete_recommender">

Deactivates and removes a recommender. A deleted recommender can no longer be specified in a GetRecommendations request.

```sql
DELETE FROM aws.personalize.recommenders
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_recommender"
    values={[
        { label: 'start_recommender', value: 'start_recommender' },
        { label: 'stop_recommender', value: 'stop_recommender' }
    ]}
>
<TabItem value="start_recommender">

Starts a recommender that is INACTIVE. Starting a recommender does not create any new models, but resumes billing and automatic retraining for the recommender.

```sql
EXEC aws.personalize.recommenders.start_recommender 
@region='{{ region }}' --required 
@@json=
'{
"recommenderArn": "{{ recommenderArn }}"
}'
;
```
</TabItem>
<TabItem value="stop_recommender">

Stops a recommender that is ACTIVE. Stopping a recommender halts billing and automatic retraining for the recommender.

```sql
EXEC aws.personalize.recommenders.stop_recommender 
@region='{{ region }}' --required 
@@json=
'{
"recommenderArn": "{{ recommenderArn }}"
}'
;
```
</TabItem>
</Tabs>
