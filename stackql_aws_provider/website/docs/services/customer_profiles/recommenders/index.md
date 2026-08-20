--- 
title: recommenders
hide_title: false
hide_table_of_contents: false
keywords:
  - recommenders
  - customer_profiles
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.customer_profiles.recommenders" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_recommender"
    values={[
        { label: 'get_recommender', value: 'get_recommender' },
        { label: 'list_recommenders', value: 'list_recommenders' }
    ]}
>
<TabItem value="get_recommender">

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
    <td><CopyableCode code="active_recommender_version_name" /></td>
    <td><code>string</code></td>
    <td>The name of the recommender version currently serving recommendations. Omitted when no active recommender version is set. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+/\d&#123;4&#125;-\d&#123;2&#125;-\d&#123;2&#125;T\d&#123;2&#125;-\d&#123;2&#125;-\d&#123;2&#125;Z&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the recommender was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A detailed description of the recommender providing information about its purpose and functionality.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>If the recommender fails, provides the reason for the failure.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the recommender was edited.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_recommender_update" /></td>
    <td><code>object</code></td>
    <td>Information about the most recent update performed on the recommender, including status and timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="recommender_config" /></td>
    <td><code>object</code></td>
    <td>Configuration settings that define the behavior and parameters of a recommender.</td>
</tr>
<tr>
    <td><CopyableCode code="recommender_name" /></td>
    <td><code>string</code></td>
    <td>The name of the recommender. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recommender_recipe_name" /></td>
    <td><code>string</code></td>
    <td>The name of the recipe used by the recommender to generate recommendations. (recommended-for-you, similar-items, frequently-paired-items, popular-items, trending-now, personalized-ranking)</td>
</tr>
<tr>
    <td><CopyableCode code="recommender_schema_name" /></td>
    <td><code>string</code></td>
    <td>The name of the recommender schema associated with this recommender. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the recommender, indicating whether it is active, creating, updating, or in another state. (PENDING, IN_PROGRESS, ACTIVE, FAILED, STOPPING, INACTIVE, STARTING, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="training_metrics" /></td>
    <td><code>array</code></td>
    <td>A set of metrics that provide information about the recommender's training performance and accuracy.</td>
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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the recommender was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the recommender's purpose and characteristics.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>If the recommender is in a failed state, provides the reason for the failure.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the recommender was edited.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_recommender_update" /></td>
    <td><code>object</code></td>
    <td>Information about the most recent update performed on the recommender, including its status and timing.</td>
</tr>
<tr>
    <td><CopyableCode code="recipe_name" /></td>
    <td><code>string</code></td>
    <td>The name of the recipe used by this recommender. (recommended-for-you, similar-items, frequently-paired-items, popular-items, trending-now, personalized-ranking)</td>
</tr>
<tr>
    <td><CopyableCode code="recommender_config" /></td>
    <td><code>object</code></td>
    <td>Configuration settings that define the behavior and parameters of a recommender.</td>
</tr>
<tr>
    <td><CopyableCode code="recommender_name" /></td>
    <td><code>string</code></td>
    <td>The name of the recommender. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recommender_schema_name" /></td>
    <td><code>string</code></td>
    <td>The name of the recommender schema associated with this recommender. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current operational status of the recommender. (PENDING, IN_PROGRESS, ACTIVE, FAILED, STOPPING, INACTIVE, STARTING, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource.</td>
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
    <td><a href="#get_recommender"><CopyableCode code="get_recommender" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-recommender_name"><code>recommender_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-training-metrics-count"><code>training-metrics-count</code></a></td>
    <td>Retrieves a recommender.</td>
</tr>
<tr>
    <td><a href="#list_recommenders"><CopyableCode code="list_recommenders" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a></td>
    <td>Returns a list of recommenders in the specified domain.</td>
</tr>
<tr>
    <td><a href="#create_recommender"><CopyableCode code="create_recommender" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-recommender_name"><code>recommender_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RecommenderRecipeName"><code>RecommenderRecipeName</code></a></td>
    <td></td>
    <td>Creates a recommender</td>
</tr>
<tr>
    <td><a href="#update_recommender"><CopyableCode code="update_recommender" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-recommender_name"><code>recommender_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the properties of an existing recommender, allowing you to modify its configuration and description.</td>
</tr>
<tr>
    <td><a href="#delete_recommender"><CopyableCode code="delete_recommender" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-recommender_name"><code>recommender_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a recommender.</td>
</tr>
<tr>
    <td><a href="#start_recommender"><CopyableCode code="start_recommender" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-recommender_name"><code>recommender_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Starts a recommender that was previously stopped. Starting a recommender resumes its ability to generate recommendations.</td>
</tr>
<tr>
    <td><a href="#stop_recommender"><CopyableCode code="stop_recommender" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-recommender_name"><code>recommender_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Stops a recommender, suspending its ability to generate recommendations. The recommender can be restarted later using StartRecommender.</td>
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
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the domain.</td>
</tr>
<tr id="parameter-recommender_name">
    <td><CopyableCode code="recommender_name" /></td>
    <td><code>string</code></td>
    <td>The name of the recommender to stop.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of recommenders to return in the response. The default value is 100.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>A token received from a previous ListRecommenders call to retrieve the next page of results.</td>
</tr>
<tr id="parameter-training-metrics-count">
    <td><CopyableCode code="training-metrics-count" /></td>
    <td><code>integer</code></td>
    <td>The number of training metrics to retrieve for the recommender.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_recommender"
    values={[
        { label: 'get_recommender', value: 'get_recommender' },
        { label: 'list_recommenders', value: 'list_recommenders' }
    ]}
>
<TabItem value="get_recommender">

Retrieves a recommender.

```sql
SELECT
active_recommender_version_name,
created_at,
description,
failure_reason,
last_updated_at,
latest_recommender_update,
recommender_config,
recommender_name,
recommender_recipe_name,
recommender_schema_name,
status,
tags,
training_metrics
FROM aws.customer_profiles.recommenders
WHERE domain_name = '{{ domain_name }}' -- required
AND recommender_name = '{{ recommender_name }}' -- required
AND region = '{{ region }}' -- required
AND `training-metrics-count` = '{{ training-metrics-count }}'
;
```
</TabItem>
<TabItem value="list_recommenders">

Returns a list of recommenders in the specified domain.

```sql
SELECT
created_at,
description,
failure_reason,
last_updated_at,
latest_recommender_update,
recipe_name,
recommender_config,
recommender_name,
recommender_schema_name,
status,
tags
FROM aws.customer_profiles.recommenders
WHERE domain_name = '{{ domain_name }}' -- required
AND region = '{{ region }}' -- required
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
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

Creates a recommender

```sql
INSERT INTO aws.customer_profiles.recommenders (
RecommenderRecipeName,
RecommenderConfig,
Description,
RecommenderSchemaName,
Tags,
domain_name,
recommender_name,
region
)
SELECT 
'{{ RecommenderRecipeName }}' /* required */,
'{{ RecommenderConfig }}',
'{{ Description }}',
'{{ RecommenderSchemaName }}',
'{{ Tags }}',
'{{ domain_name }}',
'{{ recommender_name }}',
'{{ region }}'
RETURNING
recommender_arn,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: recommenders
  props:
    - name: domain_name
      value: "{{ domain_name }}"
      description: Required parameter for the recommenders resource.
    - name: recommender_name
      value: "{{ recommender_name }}"
      description: Required parameter for the recommenders resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the recommenders resource.
    - name: RecommenderRecipeName
      value: "{{ RecommenderRecipeName }}"
      valid_values: ['recommended-for-you', 'similar-items', 'frequently-paired-items', 'popular-items', 'trending-now', 'personalized-ranking']
    - name: RecommenderConfig
      description: |
        Configuration settings that define the behavior and parameters of a recommender.
      value:
        EventsConfig:
          EventParametersList:
            - EventType: "{{ EventType }}"
              EventValueThreshold: {{ EventValueThreshold }}
              EventWeight: {{ EventWeight }}
        TrainingFrequency: {{ TrainingFrequency }}
        InferenceConfig:
          MinProvisionedTPS: {{ MinProvisionedTPS }}
        IncludedColumns: "{{ IncludedColumns }}"
        ExcludedColumns: "{{ ExcludedColumns }}"
        DiversityConfig:
          DiversityColumns:
            - Name: "{{ Name }}"
              CapType: "{{ CapType }}"
              Target: "{{ Target }}"
    - name: Description
      value: "{{ Description }}"
    - name: RecommenderSchemaName
      value: "{{ RecommenderSchemaName }}"
    - name: Tags
      value: "{{ Tags }}"
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

Updates the properties of an existing recommender, allowing you to modify its configuration and description.

```sql
UPDATE aws.customer_profiles.recommenders
SET 
Description = '{{ Description }}',
RecommenderConfig = '{{ RecommenderConfig }}',
RecommenderVersionName = '{{ RecommenderVersionName }}'
WHERE 
domain_name = '{{ domain_name }}' --required
AND recommender_name = '{{ recommender_name }}' --required
AND region = '{{ region }}' --required
RETURNING
recommender_name;
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

Deletes a recommender.

```sql
DELETE FROM aws.customer_profiles.recommenders
WHERE domain_name = '{{ domain_name }}' --required
AND recommender_name = '{{ recommender_name }}' --required
AND region = '{{ region }}' --required
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

Starts a recommender that was previously stopped. Starting a recommender resumes its ability to generate recommendations.

```sql
EXEC aws.customer_profiles.recommenders.start_recommender 
@domain_name='{{ domain_name }}' --required, 
@recommender_name='{{ recommender_name }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="stop_recommender">

Stops a recommender, suspending its ability to generate recommendations. The recommender can be restarted later using StartRecommender.

```sql
EXEC aws.customer_profiles.recommenders.stop_recommender 
@domain_name='{{ domain_name }}' --required, 
@recommender_name='{{ recommender_name }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
