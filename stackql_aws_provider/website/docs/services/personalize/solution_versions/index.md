--- 
title: solution_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - solution_versions
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

Creates, updates, deletes, gets or lists a <code>solution_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="solution_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.personalize.solution_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_solution_version"
    values={[
        { label: 'describe_solution_version', value: 'describe_solution_version' },
        { label: 'list_solution_versions', value: 'list_solution_versions' }
    ]}
>
<TabItem value="describe_solution_version">

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
    <td>The name of the solution version. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9\-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time (in Unix time) that this version of the solution was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_group_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the dataset group providing the training data. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="event_type" /></td>
    <td><code>string</code></td>
    <td>The event type (for example, 'click' or 'like') that is used for training the model.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>If training a solution version fails, the reason for the failure.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time (in Unix time) that the solution was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="perform_auto_ml" /></td>
    <td><code>boolean</code></td>
    <td>When true, Amazon Personalize searches for the most optimal recipe according to the solution configuration. When false (the default), Amazon Personalize uses recipeArn.</td>
</tr>
<tr>
    <td><CopyableCode code="perform_hpo" /></td>
    <td><code>boolean</code></td>
    <td>Whether to perform hyperparameter optimization (HPO) on the chosen recipe. The default is false.</td>
</tr>
<tr>
    <td><CopyableCode code="perform_incremental_update" /></td>
    <td><code>boolean</code></td>
    <td>Whether the solution version should perform an incremental update. When set to true, the training will process only the data that has changed since the latest training, similar to when trainingMode is set to UPDATE. This can only be used with solution versions that use the User-Personalization recipe.</td>
</tr>
<tr>
    <td><CopyableCode code="recipe_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the recipe used in the solution. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="solution_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the solution. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="solution_config" /></td>
    <td><code>object</code></td>
    <td>Describes the configuration properties for the solution.</td>
</tr>
<tr>
    <td><CopyableCode code="solution_version_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the solution version. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the solution version. A solution version can be in one of the following states: CREATE PENDING CREATE IN_PROGRESS ACTIVE CREATE FAILED CREATE STOPPING CREATE STOPPED</td>
</tr>
<tr>
    <td><CopyableCode code="training_hours" /></td>
    <td><code>number (double)</code></td>
    <td>The time used to train the model. You are billed for the time it takes to train a model. This field is visible only after Amazon Personalize successfully trains a model.</td>
</tr>
<tr>
    <td><CopyableCode code="training_mode" /></td>
    <td><code>string</code></td>
    <td>The scope of training to be performed when creating the solution version. A FULL training considers all of the data in your dataset group. An UPDATE processes only the data that has changed since the latest training. Only solution versions created with the User-Personalization recipe can use UPDATE. (FULL, UPDATE, AUTOTRAIN)</td>
</tr>
<tr>
    <td><CopyableCode code="training_type" /></td>
    <td><code>string</code></td>
    <td>Whether the solution version was created automatically or manually. (AUTOMATIC, MANUAL)</td>
</tr>
<tr>
    <td><CopyableCode code="tuned_hpo_params" /></td>
    <td><code>object</code></td>
    <td>If hyperparameter optimization was performed, contains the hyperparameter values of the best performing model.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_solution_versions">

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
    <td><CopyableCode code="creation_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time (in Unix time) that this version of a solution was created.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>If a solution version fails, the reason behind the failure.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time (in Unix time) that the solution version was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="solution_version_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the solution version. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the solution version. A solution version can be in one of the following states: CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</td>
</tr>
<tr>
    <td><CopyableCode code="training_mode" /></td>
    <td><code>string</code></td>
    <td>The scope of training to be performed when creating the solution version. A FULL training considers all of the data in your dataset group. An UPDATE processes only the data that has changed since the latest training. Only solution versions created with the User-Personalization recipe can use UPDATE. (FULL, UPDATE, AUTOTRAIN)</td>
</tr>
<tr>
    <td><CopyableCode code="training_type" /></td>
    <td><code>string</code></td>
    <td>Whether the solution version was created automatically or manually. (AUTOMATIC, MANUAL)</td>
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
    <td><a href="#describe_solution_version"><CopyableCode code="describe_solution_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a specific version of a solution. For more information on solutions, see CreateSolution</td>
</tr>
<tr>
    <td><a href="#list_solution_versions"><CopyableCode code="list_solution_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of solution versions for the given solution. When a solution is not specified, all the solution versions associated with the account are listed. The response provides the properties for each solution version, including the Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><a href="#create_solution_version"><CopyableCode code="create_solution_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-solutionArn"><code>solutionArn</code></a></td>
    <td></td>
    <td>Trains or retrains an active solution in a Custom dataset group. A solution is created using the CreateSolution operation and must be in the ACTIVE state before calling CreateSolutionVersion. A new version of the solution is created every time you call this operation. Status A solution version can be in one of the following states: CREATE PENDING CREATE IN_PROGRESS ACTIVE CREATE FAILED CREATE STOPPING CREATE STOPPED To get the status of the version, call DescribeSolutionVersion. Wait until the status shows as ACTIVE before calling CreateCampaign. If the status shows as CREATE FAILED, the response includes a failureReason key, which describes why the job failed. Related APIs ListSolutionVersions DescribeSolutionVersion ListSolutions CreateSolution DescribeSolution DeleteSolution</td>
</tr>
<tr>
    <td><a href="#stop_solution_version_creation"><CopyableCode code="stop_solution_version_creation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-solutionVersionArn"><code>solutionVersionArn</code></a></td>
    <td></td>
    <td>Stops creating a solution version that is in a state of CREATE_PENDING or CREATE IN_PROGRESS. Depending on the current state of the solution version, the solution version state changes as follows: CREATE_PENDING &gt; CREATE_STOPPED or CREATE_IN_PROGRESS &gt; CREATE_STOPPING &gt; CREATE_STOPPED You are billed for all of the training completed up until you stop the solution version creation. You cannot resume creating a solution version once it has been stopped.</td>
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
    defaultValue="describe_solution_version"
    values={[
        { label: 'describe_solution_version', value: 'describe_solution_version' },
        { label: 'list_solution_versions', value: 'list_solution_versions' }
    ]}
>
<TabItem value="describe_solution_version">

Describes a specific version of a solution. For more information on solutions, see CreateSolution

```sql
SELECT
name,
creation_date_time,
dataset_group_arn,
event_type,
failure_reason,
last_updated_date_time,
perform_auto_ml,
perform_hpo,
perform_incremental_update,
recipe_arn,
solution_arn,
solution_config,
solution_version_arn,
status,
training_hours,
training_mode,
training_type,
tuned_hpo_params
FROM aws.personalize.solution_versions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_solution_versions">

Returns a list of solution versions for the given solution. When a solution is not specified, all the solution versions associated with the account are listed. The response provides the properties for each solution version, including the Amazon Resource Name (ARN).

```sql
SELECT
creation_date_time,
failure_reason,
last_updated_date_time,
solution_version_arn,
status,
training_mode,
training_type
FROM aws.personalize.solution_versions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_solution_version"
    values={[
        { label: 'create_solution_version', value: 'create_solution_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_solution_version">

Trains or retrains an active solution in a Custom dataset group. A solution is created using the CreateSolution operation and must be in the ACTIVE state before calling CreateSolutionVersion. A new version of the solution is created every time you call this operation. Status A solution version can be in one of the following states: CREATE PENDING CREATE IN_PROGRESS ACTIVE CREATE FAILED CREATE STOPPING CREATE STOPPED To get the status of the version, call DescribeSolutionVersion. Wait until the status shows as ACTIVE before calling CreateCampaign. If the status shows as CREATE FAILED, the response includes a failureReason key, which describes why the job failed. Related APIs ListSolutionVersions DescribeSolutionVersion ListSolutions CreateSolution DescribeSolution DeleteSolution

```sql
INSERT INTO aws.personalize.solution_versions (
name,
solutionArn,
trainingMode,
tags,
region
)
SELECT 
'{{ name }}',
'{{ solutionArn }}' /* required */,
'{{ trainingMode }}',
'{{ tags }}',
'{{ region }}'
RETURNING
solution_version_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: solution_versions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the solution_versions resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the solution version.
    - name: solutionArn
      value: "{{ solutionArn }}"
      description: |
        The Amazon Resource Name (ARN) of the solution containing the training configuration information.
    - name: trainingMode
      value: "{{ trainingMode }}"
      description: |
        The scope of training to be performed when creating the solution version. The default is FULL. This creates a completely new model based on the entirety of the training data from the datasets in your dataset group. If you use User-Personalization, you can specify a training mode of UPDATE. This updates the model to consider new items for recommendations. It is not a full retraining. You should still complete a full retraining weekly. If you specify UPDATE, Amazon Personalize will stop automatic updates for the solution version. To resume updates, create a new solution with training mode set to FULL and deploy it in a campaign. For more information about automatic updates, see Automatic updates. The UPDATE option can only be used when you already have an active solution version created from the input solution using the FULL option and the input solution was trained with the User-Personalization recipe or the legacy HRNN-Coldstart recipe.
      valid_values: ['FULL', 'UPDATE', 'AUTOTRAIN']
    - name: tags
      description: |
        A list of tags to apply to the solution version.
      value:
        - tagKey: "{{ tagKey }}"
          tagValue: "{{ tagValue }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="stop_solution_version_creation"
    values={[
        { label: 'stop_solution_version_creation', value: 'stop_solution_version_creation' }
    ]}
>
<TabItem value="stop_solution_version_creation">

Stops creating a solution version that is in a state of CREATE_PENDING or CREATE IN_PROGRESS. Depending on the current state of the solution version, the solution version state changes as follows: CREATE_PENDING &gt; CREATE_STOPPED or CREATE_IN_PROGRESS &gt; CREATE_STOPPING &gt; CREATE_STOPPED You are billed for all of the training completed up until you stop the solution version creation. You cannot resume creating a solution version once it has been stopped.

```sql
EXEC aws.personalize.solution_versions.stop_solution_version_creation 
@region='{{ region }}' --required 
@@json=
'{
"solutionVersionArn": "{{ solutionVersionArn }}"
}'
;
```
</TabItem>
</Tabs>
