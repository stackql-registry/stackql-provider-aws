--- 
title: experiments
hide_title: false
hide_table_of_contents: false
keywords:
  - experiments
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

Creates, updates, deletes, gets or lists an <code>experiments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="experiments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.experiments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_experiment"
    values={[
        { label: 'describe_experiment', value: 'describe_experiment' },
        { label: 'list_experiments', value: 'list_experiments' }
    ]}
>
<TabItem value="describe_experiment">

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
    <td><CopyableCode code="CreatedBy" /></td>
    <td><code>object</code></td>
    <td>Information about the user who created or modified a SageMaker resource.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the experiment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the experiment. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DisplayName" /></td>
    <td><code>string</code></td>
    <td>The name of the experiment as displayed. If DisplayName isn't specified, ExperimentName is displayed. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,119&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ExperimentArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the experiment. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:experiment/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ExperimentName" /></td>
    <td><code>string</code></td>
    <td>The name of the experiment. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,119&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedBy" /></td>
    <td><code>object</code></td>
    <td>Information about the user who created or modified a SageMaker resource.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the experiment was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="Source" /></td>
    <td><code>object</code></td>
    <td>The Amazon Resource Name (ARN) of the source and, optionally, the type.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_experiments">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the experiment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DisplayName" /></td>
    <td><code>string</code></td>
    <td>The name of the experiment as displayed. If DisplayName isn't specified, ExperimentName is displayed. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,119&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ExperimentArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the experiment. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:experiment/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ExperimentName" /></td>
    <td><code>string</code></td>
    <td>The name of the experiment. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,119&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ExperimentSource" /></td>
    <td><code>object</code></td>
    <td>The source of the experiment.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the experiment was last modified.</td>
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
    <td><a href="#describe_experiment"><CopyableCode code="describe_experiment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides a list of an experiment's properties.</td>
</tr>
<tr>
    <td><a href="#list_experiments"><CopyableCode code="list_experiments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all the experiments in your account. The list can be filtered to show only experiments that were created in a specific time range. The list can be sorted by experiment name or creation time.</td>
</tr>
<tr>
    <td><a href="#create_experiment"><CopyableCode code="create_experiment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ExperimentName"><code>ExperimentName</code></a></td>
    <td></td>
    <td>Creates a SageMaker experiment. An experiment is a collection of trials that are observed, compared and evaluated as a group. A trial is a set of steps, called trial components, that produce a machine learning model. In the Studio UI, trials are referred to as run groups and trial components are referred to as runs. The goal of an experiment is to determine the components that produce the best model. Multiple trials are performed, each one isolating and measuring the impact of a change to one or more inputs, while keeping the remaining inputs constant. When you use SageMaker Studio or the SageMaker Python SDK, all experiments, trials, and trial components are automatically tracked, logged, and indexed. When you use the Amazon Web Services SDK for Python (Boto), you must use the logging APIs provided by the SDK. You can add tags to experiments, trials, trial components and then use the Search API to search for the tags. To add a description to an experiment, specify the optional Description parameter. To add a description later, or to change the description, call the UpdateExperiment API. To get a list of all your experiments, call the ListExperiments API. To view an experiment's properties, call the DescribeExperiment API. To get a list of all the trials associated with an experiment, call the ListTrials API. To create a trial call the CreateTrial API.</td>
</tr>
<tr>
    <td><a href="#update_experiment"><CopyableCode code="update_experiment" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ExperimentName"><code>ExperimentName</code></a></td>
    <td></td>
    <td>Adds, updates, or removes the description of an experiment. Updates the display name of an experiment.</td>
</tr>
<tr>
    <td><a href="#delete_experiment"><CopyableCode code="delete_experiment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an SageMaker experiment. All trials associated with the experiment must be deleted first. Use the ListTrials API to get a list of the trials associated with the experiment.</td>
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
    defaultValue="describe_experiment"
    values={[
        { label: 'describe_experiment', value: 'describe_experiment' },
        { label: 'list_experiments', value: 'list_experiments' }
    ]}
>
<TabItem value="describe_experiment">

Provides a list of an experiment's properties.

```sql
SELECT
CreatedBy,
CreationTime,
Description,
DisplayName,
ExperimentArn,
ExperimentName,
LastModifiedBy,
LastModifiedTime,
Source
FROM aws.sagemaker.experiments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_experiments">

Lists all the experiments in your account. The list can be filtered to show only experiments that were created in a specific time range. The list can be sorted by experiment name or creation time.

```sql
SELECT
CreationTime,
DisplayName,
ExperimentArn,
ExperimentName,
ExperimentSource,
LastModifiedTime
FROM aws.sagemaker.experiments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_experiment"
    values={[
        { label: 'create_experiment', value: 'create_experiment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_experiment">

Creates a SageMaker experiment. An experiment is a collection of trials that are observed, compared and evaluated as a group. A trial is a set of steps, called trial components, that produce a machine learning model. In the Studio UI, trials are referred to as run groups and trial components are referred to as runs. The goal of an experiment is to determine the components that produce the best model. Multiple trials are performed, each one isolating and measuring the impact of a change to one or more inputs, while keeping the remaining inputs constant. When you use SageMaker Studio or the SageMaker Python SDK, all experiments, trials, and trial components are automatically tracked, logged, and indexed. When you use the Amazon Web Services SDK for Python (Boto), you must use the logging APIs provided by the SDK. You can add tags to experiments, trials, trial components and then use the Search API to search for the tags. To add a description to an experiment, specify the optional Description parameter. To add a description later, or to change the description, call the UpdateExperiment API. To get a list of all your experiments, call the ListExperiments API. To view an experiment's properties, call the DescribeExperiment API. To get a list of all the trials associated with an experiment, call the ListTrials API. To create a trial call the CreateTrial API.

```sql
INSERT INTO aws.sagemaker.experiments (
ExperimentName,
DisplayName,
Description,
Tags,
region
)
SELECT 
'{{ ExperimentName }}' /* required */,
'{{ DisplayName }}',
'{{ Description }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
ExperimentArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: experiments
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the experiments resource.
    - name: ExperimentName
      value: "{{ ExperimentName }}"
      description: |
        The name of the experiment. The name must be unique in your Amazon Web Services account and is not case-sensitive.
    - name: DisplayName
      value: "{{ DisplayName }}"
      description: |
        The name of the experiment as displayed. The name doesn't need to be unique. If you don't specify DisplayName, the value in ExperimentName is displayed.
    - name: Description
      value: "{{ Description }}"
      description: |
        The description of the experiment.
    - name: Tags
      description: |
        A list of tags to associate with the experiment. You can use Search API to search on the tags.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_experiment"
    values={[
        { label: 'update_experiment', value: 'update_experiment' }
    ]}
>
<TabItem value="update_experiment">

Adds, updates, or removes the description of an experiment. Updates the display name of an experiment.

```sql
UPDATE aws.sagemaker.experiments
SET 
ExperimentName = '{{ ExperimentName }}',
DisplayName = '{{ DisplayName }}',
Description = '{{ Description }}'
WHERE 
region = '{{ region }}' --required
AND ExperimentName = '{{ ExperimentName }}' --required
RETURNING
ExperimentArn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_experiment"
    values={[
        { label: 'delete_experiment', value: 'delete_experiment' }
    ]}
>
<TabItem value="delete_experiment">

Deletes an SageMaker experiment. All trials associated with the experiment must be deleted first. Use the ListTrials API to get a list of the trials associated with the experiment.

```sql
DELETE FROM aws.sagemaker.experiments
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
