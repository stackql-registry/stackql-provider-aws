--- 
title: model_cards
hide_title: false
hide_table_of_contents: false
keywords:
  - model_cards
  - sagemaker
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

Creates, updates, deletes, gets or lists a <code>model_cards</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="model_cards" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.model_cards" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_model_card"
    values={[
        { label: 'describe_model_card', value: 'describe_model_card' },
        { label: 'list_model_cards', value: 'list_model_cards' }
    ]}
>
<TabItem value="describe_model_card">

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
    <td><CopyableCode code="content" /></td>
    <td><code>string</code></td>
    <td>The content of the model card. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>object</code></td>
    <td>Information about the user who created or modified a SageMaker resource.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the model card was created.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_by" /></td>
    <td><code>object</code></td>
    <td>Information about the user who created or modified a SageMaker resource.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the model card was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="model_card_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the model card. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;&#123;9,16&#125;:&#91;0-9&#93;&#123;12&#125;:model-card/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="model_card_name" /></td>
    <td><code>string</code></td>
    <td>The name of the model card. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="model_card_processing_status" /></td>
    <td><code>string</code></td>
    <td>The processing status of model card deletion. The ModelCardProcessingStatus updates throughout the different deletion steps. DeletePending: Model card deletion request received. DeleteInProgress: Model card deletion is in progress. ContentDeleted: Deleted model card content. ExportJobsDeleted: Deleted all export jobs associated with the model card. DeleteCompleted: Successfully deleted the model card. DeleteFailed: The model card failed to delete. (DeleteInProgress, DeletePending, ContentDeleted, ExportJobsDeleted, DeleteCompleted, DeleteFailed)</td>
</tr>
<tr>
    <td><CopyableCode code="model_card_status" /></td>
    <td><code>string</code></td>
    <td>The approval status of the model card within your organization. Different organizations might have different criteria for model card review and approval. Draft: The model card is a work in progress. PendingReview: The model card is pending review. Approved: The model card is approved. Archived: The model card is archived. No more updates should be made to the model card, but it can still be exported. (Draft, PendingReview, Approved, Archived)</td>
</tr>
<tr>
    <td><CopyableCode code="model_card_version" /></td>
    <td><code>integer</code></td>
    <td>The version of the model card.</td>
</tr>
<tr>
    <td><CopyableCode code="security_config" /></td>
    <td><code>object</code></td>
    <td>The security configuration used to protect model card content.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_model_cards">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the model card was created.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the model card was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="model_card_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the model card. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;&#123;9,16&#125;:&#91;0-9&#93;&#123;12&#125;:model-card/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="model_card_name" /></td>
    <td><code>string</code></td>
    <td>The name of the model card. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="model_card_status" /></td>
    <td><code>string</code></td>
    <td>The approval status of the model card within your organization. Different organizations might have different criteria for model card review and approval. Draft: The model card is a work in progress. PendingReview: The model card is pending review. Approved: The model card is approved. Archived: The model card is archived. No more updates should be made to the model card, but it can still be exported. (Draft, PendingReview, Approved, Archived)</td>
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
    <td><a href="#describe_model_card"><CopyableCode code="describe_model_card" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the content, creation time, and security configuration of an Amazon SageMaker Model Card.</td>
</tr>
<tr>
    <td><a href="#list_model_cards"><CopyableCode code="list_model_cards" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List existing model cards.</td>
</tr>
<tr>
    <td><a href="#create_model_card"><CopyableCode code="create_model_card" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ModelCardName"><code>ModelCardName</code></a>, <a href="#parameter-ModelCardStatus"><code>ModelCardStatus</code></a></td>
    <td></td>
    <td>Creates an Amazon SageMaker Model Card. For information about how to use model cards, see Amazon SageMaker Model Card.</td>
</tr>
<tr>
    <td><a href="#update_model_card"><CopyableCode code="update_model_card" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ModelCardName"><code>ModelCardName</code></a></td>
    <td></td>
    <td>Update an Amazon SageMaker Model Card. You cannot update both model card content and model card status in a single call.</td>
</tr>
<tr>
    <td><a href="#delete_model_card"><CopyableCode code="delete_model_card" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon SageMaker Model Card.</td>
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
    defaultValue="describe_model_card"
    values={[
        { label: 'describe_model_card', value: 'describe_model_card' },
        { label: 'list_model_cards', value: 'list_model_cards' }
    ]}
>
<TabItem value="describe_model_card">

Describes the content, creation time, and security configuration of an Amazon SageMaker Model Card.

```sql
SELECT
content,
created_by,
creation_time,
last_modified_by,
last_modified_time,
model_card_arn,
model_card_name,
model_card_processing_status,
model_card_status,
model_card_version,
security_config
FROM aws.sagemaker.model_cards
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_model_cards">

List existing model cards.

```sql
SELECT
creation_time,
last_modified_time,
model_card_arn,
model_card_name,
model_card_status
FROM aws.sagemaker.model_cards
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_model_card"
    values={[
        { label: 'create_model_card', value: 'create_model_card' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_model_card">

Creates an Amazon SageMaker Model Card. For information about how to use model cards, see Amazon SageMaker Model Card.

```sql
INSERT INTO aws.sagemaker.model_cards (
ModelCardName,
SecurityConfig,
Content,
ModelCardStatus,
Tags,
region
)
SELECT 
'{{ ModelCardName }}' /* required */,
'{{ SecurityConfig }}',
'{{ Content }}',
'{{ ModelCardStatus }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
model_card_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: model_cards
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the model_cards resource.
    - name: ModelCardName
      value: "{{ ModelCardName }}"
      description: |
        The unique name of the model card.
    - name: SecurityConfig
      description: |
        An optional Key Management Service key to encrypt, decrypt, and re-encrypt model card content for regulated workloads with highly sensitive data.
      value:
        KmsKeyId: "{{ KmsKeyId }}"
    - name: Content
      value: "{{ Content }}"
      description: |
        The content of the model card. Content must be in model card JSON schema and provided as a string.
    - name: ModelCardStatus
      value: "{{ ModelCardStatus }}"
      description: |
        The approval status of the model card within your organization. Different organizations might have different criteria for model card review and approval. Draft: The model card is a work in progress. PendingReview: The model card is pending review. Approved: The model card is approved. Archived: The model card is archived. No more updates should be made to the model card, but it can still be exported.
      valid_values: ['Draft', 'PendingReview', 'Approved', 'Archived']
    - name: Tags
      description: |
        Key-value pairs used to manage metadata for model cards.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_model_card"
    values={[
        { label: 'update_model_card', value: 'update_model_card' }
    ]}
>
<TabItem value="update_model_card">

Update an Amazon SageMaker Model Card. You cannot update both model card content and model card status in a single call.

```sql
UPDATE aws.sagemaker.model_cards
SET 
ModelCardName = '{{ ModelCardName }}',
Content = '{{ Content }}',
ModelCardStatus = '{{ ModelCardStatus }}'
WHERE 
region = '{{ region }}' --required
AND ModelCardName = '{{ ModelCardName }}' --required
RETURNING
model_card_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_model_card"
    values={[
        { label: 'delete_model_card', value: 'delete_model_card' }
    ]}
>
<TabItem value="delete_model_card">

Deletes an Amazon SageMaker Model Card.

```sql
DELETE FROM aws.sagemaker.model_cards
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
