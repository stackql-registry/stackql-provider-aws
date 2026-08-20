--- 
title: evaluation_forms
hide_title: false
hide_table_of_contents: false
keywords:
  - evaluation_forms
  - connect
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

Creates, updates, deletes, gets or lists an <code>evaluation_forms</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="evaluation_forms" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.evaluation_forms" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_evaluation_form"
    values={[
        { label: 'describe_evaluation_form', value: 'describe_evaluation_form' },
        { label: 'list_evaluation_forms', value: 'list_evaluation_forms' },
        { label: 'search_evaluation_forms', value: 'search_evaluation_forms' }
    ]}
>
<TabItem value="describe_evaluation_form">

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
    <td><CopyableCode code="auto_evaluation_configuration" /></td>
    <td><code>object</code></td>
    <td>The automatic evaluation configuration of an evaluation form.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the user who created the evaluation form.</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the evaluation form was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the evaluation form.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluation_form_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the evaluation form resource.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluation_form_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the evaluation form.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluation_form_version" /></td>
    <td><code>integer</code></td>
    <td>A version of the evaluation form.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>Items that are part of the evaluation form. The total number of sections and questions must not exceed 100 each. Questions must be contained in a section.</td>
</tr>
<tr>
    <td><CopyableCode code="language_configuration" /></td>
    <td><code>object</code></td>
    <td>Language configuration for an evaluation form.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_by" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the user who last updated the evaluation form.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the evaluation form was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="last_validation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the most recent validation was started for this evaluation form.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_validation_status" /></td>
    <td><code>string</code></td>
    <td>The status of the most recent validation run for this evaluation form. Valid values: IN_PROGRESS, COMPLETED, FAILED. (IN_PROGRESS, COMPLETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="locked" /></td>
    <td><code>boolean</code></td>
    <td>The flag indicating whether the evaluation form is locked for changes.</td>
</tr>
<tr>
    <td><CopyableCode code="review_configuration" /></td>
    <td><code>object</code></td>
    <td>Configuration settings for evaluation reviews.</td>
</tr>
<tr>
    <td><CopyableCode code="scoring_strategy" /></td>
    <td><code>object</code></td>
    <td>Information about scoring strategy for an evaluation form.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the evaluation form. (DRAFT, ACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource. For example, &#123; "Tags": &#123;"key1":"value1", "key2":"value2"&#125; &#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="target_configuration" /></td>
    <td><code>object</code></td>
    <td>Configuration that specifies the target for an evaluation form.</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>A title of the evaluation form.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_evaluation_forms">

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
    <td><CopyableCode code="active_version" /></td>
    <td><code>integer</code></td>
    <td>The version of the active evaluation form version.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the user who created the evaluation form.</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the evaluation form was created.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluation_form_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the evaluation form resource.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluation_form_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the evaluation form.</td>
</tr>
<tr>
    <td><CopyableCode code="last_activated_by" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the user who last activated the evaluation form.</td>
</tr>
<tr>
    <td><CopyableCode code="last_activated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the evaluation form was last activated.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_by" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the user who last updated the evaluation form.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the evaluation form was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_version" /></td>
    <td><code>integer</code></td>
    <td>The version number of the latest evaluation form version.</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>A title of the evaluation form.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_evaluation_forms">

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
    <td><CopyableCode code="approximate_total_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of evaluation forms that matched your search query.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluation_form_search_summary_list" /></td>
    <td><code>array</code></td>
    <td>Information about the returned evaluation forms.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>If there are additional results, this is the token for the next set of results.</td>
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
    <td><a href="#describe_evaluation_form"><CopyableCode code="describe_evaluation_form" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-evaluation_form_id"><code>evaluation_form_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-version"><code>version</code></a></td>
    <td>Describes an evaluation form in the specified Connect Customer instance. If the version property is not provided, the latest version of the evaluation form is described.</td>
</tr>
<tr>
    <td><a href="#list_evaluation_forms"><CopyableCode code="list_evaluation_forms" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists evaluation forms in the specified Connect Customer instance.</td>
</tr>
<tr>
    <td><a href="#search_evaluation_forms"><CopyableCode code="search_evaluation_forms" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches evaluation forms in an Connect Customer instance, with optional filtering. Use cases Following are common uses cases for this API: List all evaluation forms in an instance. Find all evaluation forms that meet specific criteria, such as Title, Description, Status, and more. Find all evaluation forms that are tagged with a specific set of tags. Important things to know A Search operation, unlike a List operation, takes time to index changes to resource (create, update or delete). If you don't see updated information for recently changed contact evaluations, try calling the API again in a few seconds. Endpoints: See Connect Customer endpoints and quotas.</td>
</tr>
<tr>
    <td><a href="#create_evaluation_form"><CopyableCode code="create_evaluation_form" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Items"><code>Items</code></a></td>
    <td></td>
    <td>Creates an evaluation form in the specified Connect Customer instance. The form can be used to define questions related to agent performance, and create sections to organize such questions. Question and section identifiers cannot be duplicated within the same evaluation form.</td>
</tr>
<tr>
    <td><a href="#update_evaluation_form"><CopyableCode code="update_evaluation_form" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-evaluation_form_id"><code>evaluation_form_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EvaluationFormVersion"><code>EvaluationFormVersion</code></a>, <a href="#parameter-Items"><code>Items</code></a></td>
    <td></td>
    <td>Updates details about a specific evaluation form version in the specified Connect Customer instance. Question and section identifiers cannot be duplicated within the same evaluation form. This operation does not support partial updates. Instead it does a full update of evaluation form content.</td>
</tr>
<tr>
    <td><a href="#delete_evaluation_form"><CopyableCode code="delete_evaluation_form" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-evaluation_form_id"><code>evaluation_form_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-version"><code>version</code></a></td>
    <td>Deletes an evaluation form in the specified Connect Customer instance. If the version property is provided, only the specified version of the evaluation form is deleted. If no version is provided, then the full form (all versions) is deleted.</td>
</tr>
<tr>
    <td><a href="#activate_evaluation_form"><CopyableCode code="activate_evaluation_form" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-evaluation_form_id"><code>evaluation_form_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EvaluationFormVersion"><code>EvaluationFormVersion</code></a></td>
    <td></td>
    <td>Activates an evaluation form in the specified Connect Customer instance. After the evaluation form is activated, it is available to start new evaluations based on the form.</td>
</tr>
<tr>
    <td><a href="#deactivate_evaluation_form"><CopyableCode code="deactivate_evaluation_form" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-evaluation_form_id"><code>evaluation_form_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EvaluationFormVersion"><code>EvaluationFormVersion</code></a></td>
    <td></td>
    <td>Deactivates an evaluation form in the specified Connect Customer instance. After a form is deactivated, it is no longer available for users to start new evaluations based on the form.</td>
</tr>
<tr>
    <td><a href="#start_evaluation_form_validation"><CopyableCode code="start_evaluation_form_validation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-evaluation_form_id"><code>evaluation_form_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EvaluationFormVersion"><code>EvaluationFormVersion</code></a></td>
    <td></td>
    <td>Starts an asynchronous validation process for an evaluation form version in the specified Connect Customer instance. The validation first performs structural checks on the form content (such as verifying required fields, valid scoring configuration, and correct conditional logic), then asynchronously analyzes questions configured for generative AI evaluation against a set of best practices. Use GetEvaluationFormValidation to retrieve the status and results once the validation completes.</td>
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
<tr id="parameter-evaluation_form_id">
    <td><CopyableCode code="evaluation_form_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the evaluation form.</td>
</tr>
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Connect Customer instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier for the evaluation form.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_evaluation_form"
    values={[
        { label: 'describe_evaluation_form', value: 'describe_evaluation_form' },
        { label: 'list_evaluation_forms', value: 'list_evaluation_forms' },
        { label: 'search_evaluation_forms', value: 'search_evaluation_forms' }
    ]}
>
<TabItem value="describe_evaluation_form">

Describes an evaluation form in the specified Connect Customer instance. If the version property is not provided, the latest version of the evaluation form is described.

```sql
SELECT
auto_evaluation_configuration,
created_by,
created_time,
description,
evaluation_form_arn,
evaluation_form_id,
evaluation_form_version,
items,
language_configuration,
last_modified_by,
last_modified_time,
last_validation_time,
latest_validation_status,
locked,
review_configuration,
scoring_strategy,
status,
tags,
target_configuration,
title
FROM aws.connect.evaluation_forms
WHERE instance_id = '{{ instance_id }}' -- required
AND evaluation_form_id = '{{ evaluation_form_id }}' -- required
AND region = '{{ region }}' -- required
AND version = '{{ version }}'
;
```
</TabItem>
<TabItem value="list_evaluation_forms">

Lists evaluation forms in the specified Connect Customer instance.

```sql
SELECT
active_version,
created_by,
created_time,
evaluation_form_arn,
evaluation_form_id,
last_activated_by,
last_activated_time,
last_modified_by,
last_modified_time,
latest_version,
title
FROM aws.connect.evaluation_forms
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
<TabItem value="search_evaluation_forms">

Searches evaluation forms in an Connect Customer instance, with optional filtering. Use cases Following are common uses cases for this API: List all evaluation forms in an instance. Find all evaluation forms that meet specific criteria, such as Title, Description, Status, and more. Find all evaluation forms that are tagged with a specific set of tags. Important things to know A Search operation, unlike a List operation, takes time to index changes to resource (create, update or delete). If you don't see updated information for recently changed contact evaluations, try calling the API again in a few seconds. Endpoints: See Connect Customer endpoints and quotas.

```sql
SELECT
approximate_total_count,
evaluation_form_search_summary_list,
next_token
FROM aws.connect.evaluation_forms
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_evaluation_form"
    values={[
        { label: 'create_evaluation_form', value: 'create_evaluation_form' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_evaluation_form">

Creates an evaluation form in the specified Connect Customer instance. The form can be used to define questions related to agent performance, and create sections to organize such questions. Question and section identifiers cannot be duplicated within the same evaluation form.

```sql
INSERT INTO aws.connect.evaluation_forms (
Title,
Description,
Items,
ScoringStrategy,
AutoEvaluationConfiguration,
ClientToken,
AsDraft,
Tags,
ReviewConfiguration,
TargetConfiguration,
LanguageConfiguration,
instance_id,
region
)
SELECT 
'{{ Title }}',
'{{ Description }}',
'{{ Items }}' /* required */,
'{{ ScoringStrategy }}',
'{{ AutoEvaluationConfiguration }}',
'{{ ClientToken }}',
{{ AsDraft }},
'{{ Tags }}',
'{{ ReviewConfiguration }}',
'{{ TargetConfiguration }}',
'{{ LanguageConfiguration }}',
'{{ instance_id }}',
'{{ region }}'
RETURNING
evaluation_form_arn,
evaluation_form_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: evaluation_forms
  props:
    - name: instance_id
      value: "{{ instance_id }}"
      description: Required parameter for the evaluation_forms resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the evaluation_forms resource.
    - name: Title
      value: "{{ Title }}"
    - name: Description
      value: "{{ Description }}"
    - name: Items
      value:
        - Section:
            Title: "{{ Title }}"
            RefId: "{{ RefId }}"
            Instructions: "{{ Instructions }}"
            Items: "{{ Items }}"
            Weight: {{ Weight }}
            IsExcludedFromScoring: {{ IsExcludedFromScoring }}
            ScoreThresholds:
              - PerformanceCategory: "{{ PerformanceCategory }}"
                MinScorePercentage: {{ MinScorePercentage }}
                MaxScorePercentage: {{ MaxScorePercentage }}
          Question:
            Title: "{{ Title }}"
            Instructions: "{{ Instructions }}"
            RefId: "{{ RefId }}"
            NotApplicableEnabled: {{ NotApplicableEnabled }}
            QuestionType: "{{ QuestionType }}"
            QuestionTypeProperties:
              Numeric:
                MinValue: {{ MinValue }}
                MaxValue: {{ MaxValue }}
                Options:
                  - MinValue: {{ MinValue }}
                    MaxValue: {{ MaxValue }}
                    Score: {{ Score }}
                    AutomaticFail: {{ AutomaticFail }}
                    AutomaticFailConfiguration:
                      TargetSection: "{{ TargetSection }}"
                    PointsConfiguration:
                      PointValue: {{ PointValue }}
                      IsBonus: {{ IsBonus }}
                Automation:
                  PropertyValue: "{{ PropertyValue }}"
                  AnswerSource: "{{ AnswerSource }}"
              SingleSelect:
                Options:
                  - RefId: "{{ RefId }}"
                    Text: "{{ Text }}"
                    Score: {{ Score }}
                    AutomaticFail: {{ AutomaticFail }}
                    AutomaticFailConfiguration:
                      TargetSection: "{{ TargetSection }}"
                    PointsConfiguration:
                      PointValue: {{ PointValue }}
                      IsBonus: {{ IsBonus }}
                DisplayAs: "{{ DisplayAs }}"
                Automation:
                  Options: "{{ Options }}"
                  DefaultOptionRefId: "{{ DefaultOptionRefId }}"
                  AnswerSource: "{{ AnswerSource }}"
              Text:
                Automation:
                  AnswerSource: "{{ AnswerSource }}"
              MultiSelect:
                Options:
                  - RefId: "{{ RefId }}"
                    Text: "{{ Text }}"
                    Score: {{ Score }}
                    AutomaticFail: {{ AutomaticFail }}
                    AutomaticFailConfiguration:
                      TargetSection: "{{ TargetSection }}"
                    PointsConfiguration:
                      PointValue: {{ PointValue }}
                      IsBonus: {{ IsBonus }}
                DisplayAs: "{{ DisplayAs }}"
                Automation:
                  Options: "{{ Options }}"
                  DefaultOptionRefIds: "{{ DefaultOptionRefIds }}"
                  AnswerSource: "{{ AnswerSource }}"
            Enablement:
              Condition:
                Operands:
                  - Expression:
                      Source: "{{ Source }}"
                      Values: "{{ Values }}"
                      Comparator: "{{ Comparator }}"
                    Condition:
                      Operands: "{{ Operands }}"
                      Operator: "{{ Operator }}"
                Operator: "{{ Operator }}"
              Action: "{{ Action }}"
              DefaultAction: "{{ DefaultAction }}"
            Weight: {{ Weight }}
            ScoringConfiguration:
              PointsConfiguration:
                MaxPointValue: {{ MaxPointValue }}
                MinPointValue: {{ MinPointValue }}
                IsBonus: {{ IsBonus }}
              IsExcludedFromScoring: {{ IsExcludedFromScoring }}
              ScoreThresholds:
                - PerformanceCategory: "{{ PerformanceCategory }}"
                  MinScorePercentage: {{ MinScorePercentage }}
                  MaxScorePercentage: {{ MaxScorePercentage }}
    - name: ScoringStrategy
      description: |
        Information about scoring strategy for an evaluation form.
      value:
        Mode: "{{ Mode }}"
        Status: "{{ Status }}"
        ScoreThresholds:
          - PerformanceCategory: "{{ PerformanceCategory }}"
            MinScorePercentage: {{ MinScorePercentage }}
            MaxScorePercentage: {{ MaxScorePercentage }}
    - name: AutoEvaluationConfiguration
      description: |
        The automatic evaluation configuration of an evaluation form.
      value:
        Enabled: {{ Enabled }}
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: AsDraft
      value: {{ AsDraft }}
    - name: Tags
      value: "{{ Tags }}"
    - name: ReviewConfiguration
      description: |
        Configuration settings for evaluation reviews.
      value:
        ReviewNotificationRecipients:
          - Type: "{{ Type }}"
            Value:
              UserId: "{{ UserId }}"
        EligibilityDays: {{ EligibilityDays }}
    - name: TargetConfiguration
      description: |
        Configuration that specifies the target for an evaluation form.
      value:
        ContactInteractionType: "{{ ContactInteractionType }}"
    - name: LanguageConfiguration
      description: |
        Language configuration for an evaluation form.
      value:
        FormLanguage: "{{ FormLanguage }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_evaluation_form"
    values={[
        { label: 'update_evaluation_form', value: 'update_evaluation_form' }
    ]}
>
<TabItem value="update_evaluation_form">

Updates details about a specific evaluation form version in the specified Connect Customer instance. Question and section identifiers cannot be duplicated within the same evaluation form. This operation does not support partial updates. Instead it does a full update of evaluation form content.

```sql
UPDATE aws.connect.evaluation_forms
SET 
EvaluationFormVersion = {{ EvaluationFormVersion }},
CreateNewVersion = {{ CreateNewVersion }},
Title = '{{ Title }}',
Description = '{{ Description }}',
Items = '{{ Items }}',
ScoringStrategy = '{{ ScoringStrategy }}',
AutoEvaluationConfiguration = '{{ AutoEvaluationConfiguration }}',
ReviewConfiguration = '{{ ReviewConfiguration }}',
AsDraft = {{ AsDraft }},
ClientToken = '{{ ClientToken }}',
TargetConfiguration = '{{ TargetConfiguration }}',
LanguageConfiguration = '{{ LanguageConfiguration }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND evaluation_form_id = '{{ evaluation_form_id }}' --required
AND region = '{{ region }}' --required
AND EvaluationFormVersion = '{{ EvaluationFormVersion }}' --required
AND Items = '{{ Items }}' --required
RETURNING
evaluation_form_arn,
evaluation_form_id,
evaluation_form_version;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_evaluation_form"
    values={[
        { label: 'delete_evaluation_form', value: 'delete_evaluation_form' }
    ]}
>
<TabItem value="delete_evaluation_form">

Deletes an evaluation form in the specified Connect Customer instance. If the version property is provided, only the specified version of the evaluation form is deleted. If no version is provided, then the full form (all versions) is deleted.

```sql
DELETE FROM aws.connect.evaluation_forms
WHERE instance_id = '{{ instance_id }}' --required
AND evaluation_form_id = '{{ evaluation_form_id }}' --required
AND region = '{{ region }}' --required
AND version = '{{ version }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="activate_evaluation_form"
    values={[
        { label: 'activate_evaluation_form', value: 'activate_evaluation_form' },
        { label: 'deactivate_evaluation_form', value: 'deactivate_evaluation_form' },
        { label: 'start_evaluation_form_validation', value: 'start_evaluation_form_validation' }
    ]}
>
<TabItem value="activate_evaluation_form">

Activates an evaluation form in the specified Connect Customer instance. After the evaluation form is activated, it is available to start new evaluations based on the form.

```sql
EXEC aws.connect.evaluation_forms.activate_evaluation_form 
@instance_id='{{ instance_id }}' --required, 
@evaluation_form_id='{{ evaluation_form_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"EvaluationFormVersion": {{ EvaluationFormVersion }}
}'
;
```
</TabItem>
<TabItem value="deactivate_evaluation_form">

Deactivates an evaluation form in the specified Connect Customer instance. After a form is deactivated, it is no longer available for users to start new evaluations based on the form.

```sql
EXEC aws.connect.evaluation_forms.deactivate_evaluation_form 
@instance_id='{{ instance_id }}' --required, 
@evaluation_form_id='{{ evaluation_form_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"EvaluationFormVersion": {{ EvaluationFormVersion }}
}'
;
```
</TabItem>
<TabItem value="start_evaluation_form_validation">

Starts an asynchronous validation process for an evaluation form version in the specified Connect Customer instance. The validation first performs structural checks on the form content (such as verifying required fields, valid scoring configuration, and correct conditional logic), then asynchronously analyzes questions configured for generative AI evaluation against a set of best practices. Use GetEvaluationFormValidation to retrieve the status and results once the validation completes.

```sql
EXEC aws.connect.evaluation_forms.start_evaluation_form_validation 
@instance_id='{{ instance_id }}' --required, 
@evaluation_form_id='{{ evaluation_form_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"EvaluationFormVersion": {{ EvaluationFormVersion }}
}'
;
```
</TabItem>
</Tabs>
