--- 
title: solutions
hide_title: false
hide_table_of_contents: false
keywords:
  - solutions
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

Creates, updates, deletes, gets or lists a <code>solutions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="solutions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.personalize.solutions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_solution"
    values={[
        { label: 'describe_solution', value: 'describe_solution' },
        { label: 'list_solutions', value: 'list_solutions' }
    ]}
>
<TabItem value="describe_solution">

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
    <td>The name of the solution. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9\-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="auto_ml_result" /></td>
    <td><code>object</code></td>
    <td>When performAutoML is true, specifies the best recipe found.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation date and time (in Unix time) of the solution.</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_group_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the dataset group that provides the training data. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="event_type" /></td>
    <td><code>string</code></td>
    <td>The event type (for example, 'click' or 'like') that is used for training the model. If no eventType is provided, Amazon Personalize uses all interactions for training with equal weight regardless of type.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time (in Unix time) that the solution was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_solution_update" /></td>
    <td><code>object</code></td>
    <td>Provides a summary of the latest updates to the solution.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_solution_version" /></td>
    <td><code>object</code></td>
    <td>Describes the latest version of the solution, including the status and the ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="perform_auto_ml" /></td>
    <td><code>boolean</code></td>
    <td>We don't recommend enabling automated machine learning. Instead, match your use case to the available Amazon Personalize recipes. For more information, see Determining your use case. When true, Amazon Personalize performs a search for the best USER_PERSONALIZATION recipe from the list specified in the solution configuration (recipeArn must not be specified). When false (the default), Amazon Personalize uses recipeArn for training.</td>
</tr>
<tr>
    <td><CopyableCode code="perform_auto_training" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the solution automatically creates solution versions. The default is True and the solution automatically creates new solution versions every 7 days. For more information about auto training, see Creating and configuring a solution.</td>
</tr>
<tr>
    <td><CopyableCode code="perform_hpo" /></td>
    <td><code>boolean</code></td>
    <td>Whether to perform hyperparameter optimization (HPO) on the chosen recipe. The default is false.</td>
</tr>
<tr>
    <td><CopyableCode code="perform_incremental_update" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value that indicates whether incremental training updates are performed on the model. When enabled, this allows the model to learn from new data more frequently without requiring full retraining, which enables near real-time personalization. This parameter is supported only for solutions that use the semantic-similarity recipe</td>
</tr>
<tr>
    <td><CopyableCode code="recipe_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the recipe used to create the solution. This is required when performAutoML is false. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
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
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the solution. A solution can be in one of the following states: CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED DELETE PENDING &gt; DELETE IN_PROGRESS</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_solutions">

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
    <td>The name of the solution. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9\-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time (in Unix time) that the solution was created.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time (in Unix time) that the solution was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="recipe_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the recipe used by the solution. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="solution_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the solution. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the solution. A solution can be in one of the following states: CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED DELETE PENDING &gt; DELETE IN_PROGRESS</td>
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
    <td><a href="#describe_solution"><CopyableCode code="describe_solution" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a solution. For more information on solutions, see CreateSolution.</td>
</tr>
<tr>
    <td><a href="#list_solutions"><CopyableCode code="list_solutions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of solutions in a given dataset group. When a dataset group is not specified, all the solutions associated with the account are listed. The response provides the properties for each solution, including the Amazon Resource Name (ARN). For more information on solutions, see CreateSolution.</td>
</tr>
<tr>
    <td><a href="#create_solution"><CopyableCode code="create_solution" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-datasetGroupArn"><code>datasetGroupArn</code></a></td>
    <td></td>
    <td>By default, all new solutions use automatic training. With automatic training, you incur training costs while your solution is active. To avoid unnecessary costs, when you are finished you can update the solution to turn off automatic training. For information about training costs, see Amazon Personalize pricing. Creates the configuration for training a model (creating a solution version). This configuration includes the recipe to use for model training and optional training configuration, such as columns to use in training and feature transformation parameters. For more information about configuring a solution, see Creating and configuring a solution. By default, new solutions use automatic training to create solution versions every 7 days. You can change the training frequency. Automatic solution version creation starts within one hour after the solution is ACTIVE. If you manually create a solution version within the hour, the solution skips the first automatic training. For more information, see Configuring automatic training. To turn off automatic training, set performAutoTraining to false. If you turn off automatic training, you must manually create a solution version by calling the CreateSolutionVersion operation. After training starts, you can get the solution version's Amazon Resource Name (ARN) with the ListSolutionVersions API operation. To get its status, use the DescribeSolutionVersion. After training completes you can evaluate model accuracy by calling GetSolutionMetrics. When you are satisfied with the solution version, you deploy it using CreateCampaign. The campaign provides recommendations to a client through the GetRecommendations API. Amazon Personalize doesn't support configuring the hpoObjective for solution hyperparameter optimization at this time. Status A solution can be in one of the following states: CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED DELETE PENDING &gt; DELETE IN_PROGRESS To get the status of the solution, call DescribeSolution. If you use manual training, the status must be ACTIVE before you call CreateSolutionVersion. Related APIs UpdateSolution ListSolutions CreateSolutionVersion DescribeSolution DeleteSolution ListSolutionVersions DescribeSolutionVersion</td>
</tr>
<tr>
    <td><a href="#update_solution"><CopyableCode code="update_solution" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-solutionArn"><code>solutionArn</code></a></td>
    <td></td>
    <td>Updates an Amazon Personalize solution to use a different automatic training configuration. When you update a solution, you can change whether the solution uses automatic training, and you can change the training frequency. For more information about updating a solution, see Updating a solution. A solution update can be in one of the following states: CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED To get the status of a solution update, call the DescribeSolution API operation and find the status in the latestSolutionUpdate.</td>
</tr>
<tr>
    <td><a href="#delete_solution"><CopyableCode code="delete_solution" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes all versions of a solution and the Solution object itself. Before deleting a solution, you must delete all campaigns based on the solution. To determine what campaigns are using the solution, call ListCampaigns and supply the Amazon Resource Name (ARN) of the solution. You can't delete a solution if an associated SolutionVersion is in the CREATE PENDING or IN PROGRESS state. For more information on solutions, see CreateSolution.</td>
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
    defaultValue="describe_solution"
    values={[
        { label: 'describe_solution', value: 'describe_solution' },
        { label: 'list_solutions', value: 'list_solutions' }
    ]}
>
<TabItem value="describe_solution">

Describes a solution. For more information on solutions, see CreateSolution.

```sql
SELECT
name,
auto_ml_result,
creation_date_time,
dataset_group_arn,
event_type,
last_updated_date_time,
latest_solution_update,
latest_solution_version,
perform_auto_ml,
perform_auto_training,
perform_hpo,
perform_incremental_update,
recipe_arn,
solution_arn,
solution_config,
status
FROM aws.personalize.solutions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_solutions">

Returns a list of solutions in a given dataset group. When a dataset group is not specified, all the solutions associated with the account are listed. The response provides the properties for each solution, including the Amazon Resource Name (ARN). For more information on solutions, see CreateSolution.

```sql
SELECT
name,
creation_date_time,
last_updated_date_time,
recipe_arn,
solution_arn,
status
FROM aws.personalize.solutions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_solution"
    values={[
        { label: 'create_solution', value: 'create_solution' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_solution">

By default, all new solutions use automatic training. With automatic training, you incur training costs while your solution is active. To avoid unnecessary costs, when you are finished you can update the solution to turn off automatic training. For information about training costs, see Amazon Personalize pricing. Creates the configuration for training a model (creating a solution version). This configuration includes the recipe to use for model training and optional training configuration, such as columns to use in training and feature transformation parameters. For more information about configuring a solution, see Creating and configuring a solution. By default, new solutions use automatic training to create solution versions every 7 days. You can change the training frequency. Automatic solution version creation starts within one hour after the solution is ACTIVE. If you manually create a solution version within the hour, the solution skips the first automatic training. For more information, see Configuring automatic training. To turn off automatic training, set performAutoTraining to false. If you turn off automatic training, you must manually create a solution version by calling the CreateSolutionVersion operation. After training starts, you can get the solution version's Amazon Resource Name (ARN) with the ListSolutionVersions API operation. To get its status, use the DescribeSolutionVersion. After training completes you can evaluate model accuracy by calling GetSolutionMetrics. When you are satisfied with the solution version, you deploy it using CreateCampaign. The campaign provides recommendations to a client through the GetRecommendations API. Amazon Personalize doesn't support configuring the hpoObjective for solution hyperparameter optimization at this time. Status A solution can be in one of the following states: CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED DELETE PENDING &gt; DELETE IN_PROGRESS To get the status of the solution, call DescribeSolution. If you use manual training, the status must be ACTIVE before you call CreateSolutionVersion. Related APIs UpdateSolution ListSolutions CreateSolutionVersion DescribeSolution DeleteSolution ListSolutionVersions DescribeSolutionVersion

```sql
INSERT INTO aws.personalize.solutions (
name,
performHPO,
performAutoML,
performAutoTraining,
performIncrementalUpdate,
recipeArn,
datasetGroupArn,
eventType,
solutionConfig,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
{{ performHPO }},
{{ performAutoML }},
{{ performAutoTraining }},
{{ performIncrementalUpdate }},
'{{ recipeArn }}',
'{{ datasetGroupArn }}' /* required */,
'{{ eventType }}',
'{{ solutionConfig }}',
'{{ tags }}',
'{{ region }}'
RETURNING
solution_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: solutions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the solutions resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name for the solution.
    - name: performHPO
      value: {{ performHPO }}
      description: |
        Whether to perform hyperparameter optimization (HPO) on the specified or selected recipe. The default is false. When performing AutoML, this parameter is always true and you should not set it to false.
    - name: performAutoML
      value: {{ performAutoML }}
      description: |
        We don't recommend enabling automated machine learning. Instead, match your use case to the available Amazon Personalize recipes. For more information, see Choosing a recipe. Whether to perform automated machine learning (AutoML). The default is false. For this case, you must specify recipeArn. When set to true, Amazon Personalize analyzes your training data and selects the optimal USER_PERSONALIZATION recipe and hyperparameters. In this case, you must omit recipeArn. Amazon Personalize determines the optimal recipe by running tests with different values for the hyperparameters. AutoML lengthens the training process as compared to selecting a specific recipe.
    - name: performAutoTraining
      value: {{ performAutoTraining }}
      description: |
        Whether the solution uses automatic training to create new solution versions (trained models). The default is True and the solution automatically creates new solution versions every 7 days. You can change the training frequency by specifying a schedulingExpression in the AutoTrainingConfig as part of solution configuration. For more information about automatic training, see Configuring automatic training. Automatic solution version creation starts within one hour after the solution is ACTIVE. If you manually create a solution version within the hour, the solution skips the first automatic training. After training starts, you can get the solution version's Amazon Resource Name (ARN) with the ListSolutionVersions API operation. To get its status, use the DescribeSolutionVersion.
    - name: performIncrementalUpdate
      value: {{ performIncrementalUpdate }}
      description: |
        Whether to perform incremental training updates on your model. When enabled, this allows the model to learn from new data more frequently without requiring full retraining, which enables near real-time personalization. This parameter is supported only for solutions that use the semantic-similarity recipe.
    - name: recipeArn
      value: "{{ recipeArn }}"
      description: |
        The Amazon Resource Name (ARN) of the recipe to use for model training. This is required when performAutoML is false. For information about different Amazon Personalize recipes and their ARNs, see Choosing a recipe.
    - name: datasetGroupArn
      value: "{{ datasetGroupArn }}"
      description: |
        The Amazon Resource Name (ARN) of the dataset group that provides the training data.
    - name: eventType
      value: "{{ eventType }}"
      description: |
        When your have multiple event types (using an EVENT_TYPE schema field), this parameter specifies which event type (for example, 'click' or 'like') is used for training the model. If you do not provide an eventType, Amazon Personalize will use all interactions for training with equal weight regardless of type.
    - name: solutionConfig
      description: |
        The configuration properties for the solution. When performAutoML is set to true, Amazon Personalize only evaluates the autoMLConfig section of the solution configuration. Amazon Personalize doesn't support configuring the hpoObjective at this time.
      value:
        eventValueThreshold: "{{ eventValueThreshold }}"
        hpoConfig:
          hpoObjective:
            type_: "{{ type_ }}"
            metricName: "{{ metricName }}"
            metricRegex: "{{ metricRegex }}"
          hpoResourceConfig:
            maxNumberOfTrainingJobs: "{{ maxNumberOfTrainingJobs }}"
            maxParallelTrainingJobs: "{{ maxParallelTrainingJobs }}"
          algorithmHyperParameterRanges:
            integerHyperParameterRanges:
              - name: "{{ name }}"
                minValue: {{ minValue }}
                maxValue: {{ maxValue }}
            continuousHyperParameterRanges:
              - name: "{{ name }}"
                minValue: {{ minValue }}
                maxValue: {{ maxValue }}
            categoricalHyperParameterRanges:
              - name: "{{ name }}"
                values: "{{ values }}"
        algorithmHyperParameters: "{{ algorithmHyperParameters }}"
        featureTransformationParameters: "{{ featureTransformationParameters }}"
        autoMLConfig:
          metricName: "{{ metricName }}"
          recipeList:
            - "{{ recipeList }}"
        eventsConfig:
          eventParametersList:
            - eventType: "{{ eventType }}"
              eventValueThreshold: {{ eventValueThreshold }}
              weight: {{ weight }}
        optimizationObjective:
          itemAttribute: "{{ itemAttribute }}"
          objectiveSensitivity: "{{ objectiveSensitivity }}"
        trainingDataConfig:
          excludedDatasetColumns: "{{ excludedDatasetColumns }}"
          includedDatasetColumns: "{{ includedDatasetColumns }}"
        autoTrainingConfig:
          schedulingExpression: "{{ schedulingExpression }}"
    - name: tags
      description: |
        A list of tags to apply to the solution.
      value:
        - tagKey: "{{ tagKey }}"
          tagValue: "{{ tagValue }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_solution"
    values={[
        { label: 'update_solution', value: 'update_solution' }
    ]}
>
<TabItem value="update_solution">

Updates an Amazon Personalize solution to use a different automatic training configuration. When you update a solution, you can change whether the solution uses automatic training, and you can change the training frequency. For more information about updating a solution, see Updating a solution. A solution update can be in one of the following states: CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED To get the status of a solution update, call the DescribeSolution API operation and find the status in the latestSolutionUpdate.

```sql
UPDATE aws.personalize.solutions
SET 
solutionArn = '{{ solutionArn }}',
performAutoTraining = {{ performAutoTraining }},
performIncrementalUpdate = {{ performIncrementalUpdate }},
solutionUpdateConfig = '{{ solutionUpdateConfig }}'
WHERE 
region = '{{ region }}' --required
AND solutionArn = '{{ solutionArn }}' --required
RETURNING
solution_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_solution"
    values={[
        { label: 'delete_solution', value: 'delete_solution' }
    ]}
>
<TabItem value="delete_solution">

Deletes all versions of a solution and the Solution object itself. Before deleting a solution, you must delete all campaigns based on the solution. To determine what campaigns are using the solution, call ListCampaigns and supply the Amazon Resource Name (ARN) of the solution. You can't delete a solution if an associated SolutionVersion is in the CREATE PENDING or IN PROGRESS state. For more information on solutions, see CreateSolution.

```sql
DELETE FROM aws.personalize.solutions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
