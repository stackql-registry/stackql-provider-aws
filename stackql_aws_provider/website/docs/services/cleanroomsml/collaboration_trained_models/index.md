--- 
title: collaboration_trained_models
hide_title: false
hide_table_of_contents: false
keywords:
  - collaboration_trained_models
  - cleanroomsml
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

Creates, updates, deletes, gets or lists a <code>collaboration_trained_models</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="collaboration_trained_models" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cleanroomsml.collaboration_trained_models" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_collaboration_trained_model"
    values={[
        { label: 'get_collaboration_trained_model', value: 'get_collaboration_trained_model' },
        { label: 'list_collaboration_trained_models', value: 'list_collaboration_trained_models' }
    ]}
>
<TabItem value="get_collaboration_trained_model">

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
    <td>The name of the trained model. (pattern: &lt;code&gt;(?!\s*$)&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaborationIdentifier" /></td>
    <td><code>string</code></td>
    <td>The collaboration ID of the collaboration that contains the trained model. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuredModelAlgorithmAssociationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the configured model algorithm association that was used to create this trained model. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:membership/&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;/configured-model-algorithm-association/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the trained model was created.</td>
</tr>
<tr>
    <td><CopyableCode code="creatorAccountId" /></td>
    <td><code>string</code></td>
    <td>The account ID of the member that created the trained model. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the trained model. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="incrementalTrainingDataChannels" /></td>
    <td><code>array</code></td>
    <td>Information about the incremental training data channels used to create this version of the trained model. This includes details about the base model that was used for incremental training and the channel configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="logsStatus" /></td>
    <td><code>string</code></td>
    <td>Status information for the logs. (PUBLISH_SUCCEEDED, PUBLISH_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="logsStatusDetails" /></td>
    <td><code>string</code></td>
    <td>Details about the status information for the logs.</td>
</tr>
<tr>
    <td><CopyableCode code="membershipIdentifier" /></td>
    <td><code>string</code></td>
    <td>The membership ID of the member that created the trained model. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="metricsStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the model metrics. (PUBLISH_SUCCEEDED, PUBLISH_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="metricsStatusDetails" /></td>
    <td><code>string</code></td>
    <td>Details about the status information for the model metrics.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceConfig" /></td>
    <td><code>object</code></td>
    <td>Information about the EC2 resources that are used to train the model.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the trained model. (CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED, ACTIVE, DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED, INACTIVE, CANCEL_PENDING, CANCEL_IN_PROGRESS, CANCEL_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="statusDetails" /></td>
    <td><code>object</code></td>
    <td>Details about the status of a resource.</td>
</tr>
<tr>
    <td><CopyableCode code="stoppingCondition" /></td>
    <td><code>object</code></td>
    <td>The criteria used to stop model training.</td>
</tr>
<tr>
    <td><CopyableCode code="trainedModelArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the trained model. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:membership/&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;/trained-model/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="trainingContainerImageDigest" /></td>
    <td><code>string</code></td>
    <td>Information about the training container image.</td>
</tr>
<tr>
    <td><CopyableCode code="trainingInputMode" /></td>
    <td><code>string</code></td>
    <td>The input mode that was used for accessing the training data when this trained model was created. This indicates how the training data was made available to the training algorithm. (File, FastFile, Pipe)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent time at which the trained model was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="versionIdentifier" /></td>
    <td><code>string</code></td>
    <td>The version identifier of the trained model. This unique identifier distinguishes this version from other versions of the same trained model. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_collaboration_trained_models">

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
    <td>The name of the trained model. (pattern: &lt;code&gt;(?!\s*$)&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaborationIdentifier" /></td>
    <td><code>string</code></td>
    <td>The collaboration ID of the collaboration that contains the trained model. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuredModelAlgorithmAssociationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the configured model algorithm association that is used for this trained model. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:membership/&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;/configured-model-algorithm-association/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the trained model was created.</td>
</tr>
<tr>
    <td><CopyableCode code="creatorAccountId" /></td>
    <td><code>string</code></td>
    <td>The account ID of the member that created the trained model. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the trained model. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="incrementalTrainingDataChannels" /></td>
    <td><code>array</code></td>
    <td>Information about the incremental training data channels used to create this version of the trained model.</td>
</tr>
<tr>
    <td><CopyableCode code="membershipIdentifier" /></td>
    <td><code>string</code></td>
    <td>The membership ID of the member that created the trained model. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the trained model. (CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED, ACTIVE, DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED, INACTIVE, CANCEL_PENDING, CANCEL_IN_PROGRESS, CANCEL_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="trainedModelArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the trained model. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:membership/&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;/trained-model/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent time at which the trained model was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="versionIdentifier" /></td>
    <td><code>string</code></td>
    <td>The version identifier of this trained model version. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_collaboration_trained_model"><CopyableCode code="get_collaboration_trained_model" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-trained_model_arn"><code>trained_model_arn</code></a>, <a href="#parameter-collaboration_identifier"><code>collaboration_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-versionIdentifier"><code>versionIdentifier</code></a></td>
    <td>Returns information about a trained model in a collaboration.</td>
</tr>
<tr>
    <td><a href="#list_collaboration_trained_models"><CopyableCode code="list_collaboration_trained_models" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-collaboration_identifier"><code>collaboration_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns a list of the trained models in a collaboration.</td>
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
<tr id="parameter-collaboration_identifier">
    <td><CopyableCode code="collaboration_identifier" /></td>
    <td><code>string</code></td>
    <td>The collaboration ID of the collaboration that contains the trained models you are interested in.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-trained_model_arn">
    <td><CopyableCode code="trained_model_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the trained model that you want to return information about.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum size of the results that is returned per call.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token value retrieved from a previous call to access the next page of results.</td>
</tr>
<tr id="parameter-versionIdentifier">
    <td><CopyableCode code="versionIdentifier" /></td>
    <td><code>string</code></td>
    <td>The version identifier of the trained model to retrieve. If not specified, the operation returns information about the latest version of the trained model.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_collaboration_trained_model"
    values={[
        { label: 'get_collaboration_trained_model', value: 'get_collaboration_trained_model' },
        { label: 'list_collaboration_trained_models', value: 'list_collaboration_trained_models' }
    ]}
>
<TabItem value="get_collaboration_trained_model">

Returns information about a trained model in a collaboration.

```sql
SELECT
name,
collaborationIdentifier,
configuredModelAlgorithmAssociationArn,
createTime,
creatorAccountId,
description,
incrementalTrainingDataChannels,
logsStatus,
logsStatusDetails,
membershipIdentifier,
metricsStatus,
metricsStatusDetails,
resourceConfig,
status,
statusDetails,
stoppingCondition,
trainedModelArn,
trainingContainerImageDigest,
trainingInputMode,
updateTime,
versionIdentifier
FROM aws.cleanroomsml.collaboration_trained_models
WHERE trained_model_arn = '{{ trained_model_arn }}' -- required
AND collaboration_identifier = '{{ collaboration_identifier }}' -- required
AND region = '{{ region }}' -- required
AND versionIdentifier = '{{ versionIdentifier }}'
;
```
</TabItem>
<TabItem value="list_collaboration_trained_models">

Returns a list of the trained models in a collaboration.

```sql
SELECT
name,
collaborationIdentifier,
configuredModelAlgorithmAssociationArn,
createTime,
creatorAccountId,
description,
incrementalTrainingDataChannels,
membershipIdentifier,
status,
trainedModelArn,
updateTime,
versionIdentifier
FROM aws.cleanroomsml.collaboration_trained_models
WHERE collaboration_identifier = '{{ collaboration_identifier }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
