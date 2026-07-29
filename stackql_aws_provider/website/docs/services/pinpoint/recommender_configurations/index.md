--- 
title: recommender_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - recommender_configurations
  - pinpoint
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

Creates, updates, deletes, gets or lists a <code>recommender_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="recommender_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint.recommender_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_recommender_configuration"
    values={[
        { label: 'get_recommender_configuration', value: 'get_recommender_configuration' },
        { label: 'get_recommender_configurations', value: 'get_recommender_configurations' }
    ]}
>
<TabItem value="get_recommender_configuration">

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
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>A map that defines 1-10 custom endpoint or user attributes, depending on the value for the RecommendationProviderIdType property. Each of these attributes temporarily stores a recommended item that's retrieved from the recommender model and sent to an AWS Lambda function for additional processing. Each attribute can be used as a message variable in a message template. This value is null if the configuration doesn't invoke an AWS Lambda function (RecommendationTransformerUri) to perform additional processing of recommendation data.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string</code></td>
    <td>The date, in extended ISO 8601 format, when the configuration was created for the recommender model.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The custom description of the configuration for the recommender model.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the recommender model configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_date" /></td>
    <td><code>string</code></td>
    <td>The date, in extended ISO 8601 format, when the configuration for the recommender model was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The custom name of the configuration for the recommender model.</td>
</tr>
<tr>
    <td><CopyableCode code="recommendation_provider_id_type" /></td>
    <td><code>string</code></td>
    <td>The type of Amazon Pinpoint ID that's associated with unique user IDs in the recommender model. This value enables the model to use attribute and event data that’s specific to a particular endpoint or user in an Amazon Pinpoint application. Possible values are: PINPOINT_ENDPOINT_ID - Each user in the model is associated with a particular endpoint in Amazon Pinpoint. The data is correlated based on endpoint IDs in Amazon Pinpoint. This is the default value. PINPOINT_USER_ID - Each user in the model is associated with a particular user and endpoint in Amazon Pinpoint. The data is correlated based on user IDs in Amazon Pinpoint. If this value is specified, an endpoint definition in Amazon Pinpoint has to specify both a user ID (UserId) and an endpoint ID. Otherwise, messages won’t be sent to the user's endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="recommendation_provider_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to retrieve recommendation data from the recommender model.</td>
</tr>
<tr>
    <td><CopyableCode code="recommendation_provider_uri" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the recommender model that Amazon Pinpoint retrieves the recommendation data from. This value is the ARN of an Amazon Personalize campaign.</td>
</tr>
<tr>
    <td><CopyableCode code="recommendation_transformer_uri" /></td>
    <td><code>string</code></td>
    <td>The name or Amazon Resource Name (ARN) of the AWS Lambda function that Amazon Pinpoint invokes to perform additional processing of recommendation data that it retrieves from the recommender model.</td>
</tr>
<tr>
    <td><CopyableCode code="recommendations_display_name" /></td>
    <td><code>string</code></td>
    <td>The custom display name for the standard endpoint or user attribute (RecommendationItems) that temporarily stores recommended items for each endpoint or user, depending on the value for the RecommendationProviderIdType property. This name appears in the Attribute finder of the template editor on the Amazon Pinpoint console. This value is null if the configuration doesn't invoke an AWS Lambda function (RecommendationTransformerUri) to perform additional processing of recommendation data.</td>
</tr>
<tr>
    <td><CopyableCode code="recommendations_per_message" /></td>
    <td><code>integer</code></td>
    <td>The number of recommended items that are retrieved from the model for each endpoint or user, depending on the value for the RecommendationProviderIdType property. This number determines how many recommended items are available for use in message variables.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_recommender_configurations">

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
    <td><CopyableCode code="item" /></td>
    <td><code>array</code></td>
    <td>An array of responses, one for each recommender model configuration that's associated with your Amazon Pinpoint account.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</td>
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
    <td><a href="#get_recommender_configuration"><CopyableCode code="get_recommender_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-recommender-id"><code>recommender-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about an Amazon Pinpoint configuration for a recommender model.</td>
</tr>
<tr>
    <td><a href="#get_recommender_configurations"><CopyableCode code="get_recommender_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-page-size"><code>page-size</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td>Retrieves information about all the recommender model configurations that are associated with your Amazon Pinpoint account.</td>
</tr>
<tr>
    <td><a href="#create_recommender_configuration"><CopyableCode code="create_recommender_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CreateRecommenderConfiguration"><code>CreateRecommenderConfiguration</code></a></td>
    <td></td>
    <td>Creates an Amazon Pinpoint configuration for a recommender model.</td>
</tr>
<tr>
    <td><a href="#update_recommender_configuration"><CopyableCode code="update_recommender_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-recommender-id"><code>recommender-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UpdateRecommenderConfiguration"><code>UpdateRecommenderConfiguration</code></a></td>
    <td></td>
    <td>Updates an Amazon Pinpoint configuration for a recommender model.</td>
</tr>
<tr>
    <td><a href="#delete_recommender_configuration"><CopyableCode code="delete_recommender_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-recommender-id"><code>recommender-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon Pinpoint configuration for a recommender model.</td>
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
<tr id="parameter-recommender-id">
    <td><CopyableCode code="recommender-id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the recommender model configuration. This identifier is displayed as the Recommender ID on the Amazon Pinpoint console.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-page-size">
    <td><CopyableCode code="page-size" /></td>
    <td><code>string</code></td>
    <td>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</td>
</tr>
<tr id="parameter-token">
    <td><CopyableCode code="token" /></td>
    <td><code>string</code></td>
    <td>The NextToken string that specifies which page of results to return in a paginated response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_recommender_configuration"
    values={[
        { label: 'get_recommender_configuration', value: 'get_recommender_configuration' },
        { label: 'get_recommender_configurations', value: 'get_recommender_configurations' }
    ]}
>
<TabItem value="get_recommender_configuration">

Retrieves information about an Amazon Pinpoint configuration for a recommender model.

```sql
SELECT
attributes,
creation_date,
description,
id,
last_modified_date,
name,
recommendation_provider_id_type,
recommendation_provider_role_arn,
recommendation_provider_uri,
recommendation_transformer_uri,
recommendations_display_name,
recommendations_per_message
FROM aws.pinpoint.recommender_configurations
WHERE `recommender-id` = '{{ recommender-id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_recommender_configurations">

Retrieves information about all the recommender model configurations that are associated with your Amazon Pinpoint account.

```sql
SELECT
item,
next_token
FROM aws.pinpoint.recommender_configurations
WHERE region = '{{ region }}' -- required
AND `page-size` = '{{ page-size }}'
AND token = '{{ token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_recommender_configuration"
    values={[
        { label: 'create_recommender_configuration', value: 'create_recommender_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_recommender_configuration">

Creates an Amazon Pinpoint configuration for a recommender model.

```sql
INSERT INTO aws.pinpoint.recommender_configurations (
CreateRecommenderConfiguration,
region
)
SELECT 
'{{ CreateRecommenderConfiguration }}' /* required */,
'{{ region }}'
RETURNING
recommender_configuration_response
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: recommender_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the recommender_configurations resource.
    - name: CreateRecommenderConfiguration
      description: |
        Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.
      value:
        Attributes: "{{ Attributes }}"
        Description: "{{ Description }}"
        Name: "{{ Name }}"
        RecommendationProviderIdType: "{{ RecommendationProviderIdType }}"
        RecommendationProviderRoleArn: "{{ RecommendationProviderRoleArn }}"
        RecommendationProviderUri: "{{ RecommendationProviderUri }}"
        RecommendationTransformerUri: "{{ RecommendationTransformerUri }}"
        RecommendationsDisplayName: "{{ RecommendationsDisplayName }}"
        RecommendationsPerMessage: {{ RecommendationsPerMessage }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_recommender_configuration"
    values={[
        { label: 'update_recommender_configuration', value: 'update_recommender_configuration' }
    ]}
>
<TabItem value="update_recommender_configuration">

Updates an Amazon Pinpoint configuration for a recommender model.

```sql
UPDATE aws.pinpoint.recommender_configurations
SET 
UpdateRecommenderConfiguration = '{{ UpdateRecommenderConfiguration }}'
WHERE 
`recommender-id` = '{{ recommender-id }}' --required
AND region = '{{ region }}' --required
AND UpdateRecommenderConfiguration = '{{ UpdateRecommenderConfiguration }}' --required
RETURNING
recommender_configuration_response;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_recommender_configuration"
    values={[
        { label: 'delete_recommender_configuration', value: 'delete_recommender_configuration' }
    ]}
>
<TabItem value="delete_recommender_configuration">

Deletes an Amazon Pinpoint configuration for a recommender model.

```sql
DELETE FROM aws.pinpoint.recommender_configurations
WHERE `recommender-id` = '{{ recommender-id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
