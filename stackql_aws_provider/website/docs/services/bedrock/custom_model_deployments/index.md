--- 
title: custom_model_deployments
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_model_deployments
  - bedrock
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

Creates, updates, deletes, gets or lists a <code>custom_model_deployments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="custom_model_deployments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock.custom_model_deployments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_custom_model_deployment"
    values={[
        { label: 'get_custom_model_deployment', value: 'get_custom_model_deployment' },
        { label: 'list_custom_model_deployments', value: 'list_custom_model_deployments' }
    ]}
>
<TabItem value="get_custom_model_deployment">

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
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the custom model deployment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customModelDeploymentArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the custom model deployment. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:custom-model-deployment/&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the custom model deployment. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="failureMessage" /></td>
    <td><code>string</code></td>
    <td>If the deployment status is FAILED, this field contains a message describing the failure reason.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the custom model deployment was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="modelArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the custom model associated with this deployment. (pattern: &lt;code&gt;arn:aws(|-us-gov|-cn|-iso|-iso-b):bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:custom-model/(imported|&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;&#123;1&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;(&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;)&#123;0,2&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;(&#91;:&#93;&#91;a-z0-9-&#93;&#123;1,63&#125;)&#123;0,2&#125;)/&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="modelDeploymentName" /></td>
    <td><code>string</code></td>
    <td>The name of the custom model deployment. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)&#123;1,63&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the custom model deployment. Possible values are: CREATING - The deployment is being set up and prepared for inference. ACTIVE - The deployment is ready and available for inference requests. FAILED - The deployment failed to be created or became unavailable. (Creating, Active, Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="updateDetails" /></td>
    <td><code>object</code></td>
    <td>Details about any pending or completed updates to the custom model deployment, including the new model ARN and update status.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_custom_model_deployments">

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
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the custom model deployment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customModelDeploymentArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the custom model deployment. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:custom-model-deployment/&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="customModelDeploymentName" /></td>
    <td><code>string</code></td>
    <td>The name of the custom model deployment. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)&#123;1,63&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="failureMessage" /></td>
    <td><code>string</code></td>
    <td>If the deployment status is FAILED, this field contains a message describing the failure reason.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the custom model deployment was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="modelArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the custom model associated with this deployment. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:((&#91;0-9&#93;&#123;12&#125;:custom-model/((imported)|(&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;&#123;1&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;))((&#91;:&#93;&#91;a-z0-9-&#93;&#123;1,63&#125;)&#123;0,2&#125;)?/&#91;a-z0-9&#93;&#123;12&#125;)|(:foundation-model/&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;&#123;1&#125;(&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;)&#123;0,2&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;(&#91;:&#93;&#91;a-z0-9-&#93;&#123;1,63&#125;)&#123;0,2&#125;))&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the custom model deployment. Possible values are CREATING, ACTIVE, and FAILED. (Creating, Active, Failed)</td>
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
    <td><a href="#get_custom_model_deployment"><CopyableCode code="get_custom_model_deployment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-custom_model_deployment_identifier"><code>custom_model_deployment_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a custom model deployment, including its status, configuration, and metadata. Use this operation to monitor the deployment status and retrieve details needed for inference requests. The following actions are related to the GetCustomModelDeployment operation: CreateCustomModelDeployment ListCustomModelDeployments DeleteCustomModelDeployment</td>
</tr>
<tr>
    <td><a href="#list_custom_model_deployments"><CopyableCode code="list_custom_model_deployments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-createdBefore"><code>createdBefore</code></a>, <a href="#parameter-createdAfter"><code>createdAfter</code></a>, <a href="#parameter-nameContains"><code>nameContains</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-statusEquals"><code>statusEquals</code></a>, <a href="#parameter-modelArnEquals"><code>modelArnEquals</code></a></td>
    <td>Lists custom model deployments in your account. You can filter the results by creation time, name, status, and associated model. Use this operation to manage and monitor your custom model deployments. We recommend using pagination to ensure that the operation returns quickly and successfully. The following actions are related to the ListCustomModelDeployments operation: CreateCustomModelDeployment GetCustomModelDeployment DeleteCustomModelDeployment</td>
</tr>
<tr>
    <td><a href="#create_custom_model_deployment"><CopyableCode code="create_custom_model_deployment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-modelDeploymentName"><code>modelDeploymentName</code></a>, <a href="#parameter-modelArn"><code>modelArn</code></a></td>
    <td></td>
    <td>Deploys a custom model for on-demand inference in Amazon Bedrock. After you deploy your custom model, you use the deployment's Amazon Resource Name (ARN) as the modelId parameter when you submit prompts and generate responses with model inference. For more information about setting up on-demand inference for custom models, see Set up inference for a custom model. The following actions are related to the CreateCustomModelDeployment operation: GetCustomModelDeployment ListCustomModelDeployments DeleteCustomModelDeployment</td>
</tr>
<tr>
    <td><a href="#update_custom_model_deployment"><CopyableCode code="update_custom_model_deployment" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-custom_model_deployment_identifier"><code>custom_model_deployment_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-modelArn"><code>modelArn</code></a></td>
    <td></td>
    <td>Updates a custom model deployment with a new custom model. This allows you to deploy updated models without creating new deployment endpoints.</td>
</tr>
<tr>
    <td><a href="#delete_custom_model_deployment"><CopyableCode code="delete_custom_model_deployment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-custom_model_deployment_identifier"><code>custom_model_deployment_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a custom model deployment. This operation stops the deployment and removes it from your account. After deletion, the deployment ARN can no longer be used for inference requests. The following actions are related to the DeleteCustomModelDeployment operation: CreateCustomModelDeployment GetCustomModelDeployment ListCustomModelDeployments</td>
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
<tr id="parameter-custom_model_deployment_identifier">
    <td><CopyableCode code="custom_model_deployment_identifier" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) or name of the custom model deployment to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-createdAfter">
    <td><CopyableCode code="createdAfter" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filters deployments created after the specified date and time.</td>
</tr>
<tr id="parameter-createdBefore">
    <td><CopyableCode code="createdBefore" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filters deployments created before the specified date and time.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call.</td>
</tr>
<tr id="parameter-modelArnEquals">
    <td><CopyableCode code="modelArnEquals" /></td>
    <td><code>string</code></td>
    <td>Filters deployments by the Amazon Resource Name (ARN) of the associated custom model.</td>
</tr>
<tr id="parameter-nameContains">
    <td><CopyableCode code="nameContains" /></td>
    <td><code>string</code></td>
    <td>Filters deployments whose names contain the specified string.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use this token to retrieve additional results when the response is truncated.</td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field to sort the results by. The only supported value is CreationTime.</td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order for the results. Valid values are Ascending and Descending. Default is Descending.</td>
</tr>
<tr id="parameter-statusEquals">
    <td><CopyableCode code="statusEquals" /></td>
    <td><code>string</code></td>
    <td>Filters deployments by status. Valid values are CREATING, ACTIVE, and FAILED.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_custom_model_deployment"
    values={[
        { label: 'get_custom_model_deployment', value: 'get_custom_model_deployment' },
        { label: 'list_custom_model_deployments', value: 'list_custom_model_deployments' }
    ]}
>
<TabItem value="get_custom_model_deployment">

Retrieves information about a custom model deployment, including its status, configuration, and metadata. Use this operation to monitor the deployment status and retrieve details needed for inference requests. The following actions are related to the GetCustomModelDeployment operation: CreateCustomModelDeployment ListCustomModelDeployments DeleteCustomModelDeployment

```sql
SELECT
createdAt,
customModelDeploymentArn,
description,
failureMessage,
lastUpdatedAt,
modelArn,
modelDeploymentName,
status,
updateDetails
FROM aws.bedrock.custom_model_deployments
WHERE custom_model_deployment_identifier = '{{ custom_model_deployment_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_custom_model_deployments">

Lists custom model deployments in your account. You can filter the results by creation time, name, status, and associated model. Use this operation to manage and monitor your custom model deployments. We recommend using pagination to ensure that the operation returns quickly and successfully. The following actions are related to the ListCustomModelDeployments operation: CreateCustomModelDeployment GetCustomModelDeployment DeleteCustomModelDeployment

```sql
SELECT
createdAt,
customModelDeploymentArn,
customModelDeploymentName,
failureMessage,
lastUpdatedAt,
modelArn,
status
FROM aws.bedrock.custom_model_deployments
WHERE region = '{{ region }}' -- required
AND createdBefore = '{{ createdBefore }}'
AND createdAfter = '{{ createdAfter }}'
AND nameContains = '{{ nameContains }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND statusEquals = '{{ statusEquals }}'
AND modelArnEquals = '{{ modelArnEquals }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_custom_model_deployment"
    values={[
        { label: 'create_custom_model_deployment', value: 'create_custom_model_deployment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_custom_model_deployment">

Deploys a custom model for on-demand inference in Amazon Bedrock. After you deploy your custom model, you use the deployment's Amazon Resource Name (ARN) as the modelId parameter when you submit prompts and generate responses with model inference. For more information about setting up on-demand inference for custom models, see Set up inference for a custom model. The following actions are related to the CreateCustomModelDeployment operation: GetCustomModelDeployment ListCustomModelDeployments DeleteCustomModelDeployment

```sql
INSERT INTO aws.bedrock.custom_model_deployments (
modelDeploymentName,
modelArn,
description,
tags,
clientRequestToken,
region
)
SELECT 
'{{ modelDeploymentName }}' /* required */,
'{{ modelArn }}' /* required */,
'{{ description }}',
'{{ tags }}',
'{{ clientRequestToken }}',
'{{ region }}'
RETURNING
customModelDeploymentArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: custom_model_deployments
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the custom_model_deployments resource.
    - name: modelDeploymentName
      value: "{{ modelDeploymentName }}"
    - name: modelArn
      value: "{{ modelArn }}"
    - name: description
      value: "{{ description }}"
    - name: tags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: clientRequestToken
      value: "{{ clientRequestToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_custom_model_deployment"
    values={[
        { label: 'update_custom_model_deployment', value: 'update_custom_model_deployment' }
    ]}
>
<TabItem value="update_custom_model_deployment">

Updates a custom model deployment with a new custom model. This allows you to deploy updated models without creating new deployment endpoints.

```sql
UPDATE aws.bedrock.custom_model_deployments
SET 
modelArn = '{{ modelArn }}'
WHERE 
custom_model_deployment_identifier = '{{ custom_model_deployment_identifier }}' --required
AND region = '{{ region }}' --required
AND modelArn = '{{ modelArn }}' --required
RETURNING
customModelDeploymentArn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_custom_model_deployment"
    values={[
        { label: 'delete_custom_model_deployment', value: 'delete_custom_model_deployment' }
    ]}
>
<TabItem value="delete_custom_model_deployment">

Deletes a custom model deployment. This operation stops the deployment and removes it from your account. After deletion, the deployment ARN can no longer be used for inference requests. The following actions are related to the DeleteCustomModelDeployment operation: CreateCustomModelDeployment GetCustomModelDeployment ListCustomModelDeployments

```sql
DELETE FROM aws.bedrock.custom_model_deployments
WHERE custom_model_deployment_identifier = '{{ custom_model_deployment_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
