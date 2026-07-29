--- 
title: trials
hide_title: false
hide_table_of_contents: false
keywords:
  - trials
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

Creates, updates, deletes, gets or lists a <code>trials</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="trials" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.trials" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_trial"
    values={[
        { label: 'describe_trial', value: 'describe_trial' },
        { label: 'list_trials', value: 'list_trials' }
    ]}
>
<TabItem value="describe_trial">

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
    <td><CopyableCode code="created_by" /></td>
    <td><code>object</code></td>
    <td>Information about the user who created or modified a SageMaker resource.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the trial was created.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The name of the trial as displayed. If DisplayName isn't specified, TrialName is displayed. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,119&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="experiment_name" /></td>
    <td><code>string</code></td>
    <td>The name of the experiment the trial is part of. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,119&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_by" /></td>
    <td><code>object</code></td>
    <td>Information about the user who created or modified a SageMaker resource.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the trial was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata_properties" /></td>
    <td><code>object</code></td>
    <td>Metadata properties of the tracking entity, trial, or trial component.</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>object</code></td>
    <td>The Amazon Resource Name (ARN) of the source and, optionally, the job type.</td>
</tr>
<tr>
    <td><CopyableCode code="trial_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the trial. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:experiment-trial/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="trial_name" /></td>
    <td><code>string</code></td>
    <td>The name of the trial. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,119&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_trials">

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
    <td>When the trial was created.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The name of the trial as displayed. If DisplayName isn't specified, TrialName is displayed. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,119&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the trial was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="trial_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the trial. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:experiment-trial/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="trial_name" /></td>
    <td><code>string</code></td>
    <td>The name of the trial. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,119&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="trial_source" /></td>
    <td><code>object</code></td>
    <td>The source of the trial.</td>
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
    <td><a href="#describe_trial"><CopyableCode code="describe_trial" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides a list of a trial's properties.</td>
</tr>
<tr>
    <td><a href="#list_trials"><CopyableCode code="list_trials" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the trials in your account. Specify an experiment name to limit the list to the trials that are part of that experiment. Specify a trial component name to limit the list to the trials that associated with that trial component. The list can be filtered to show only trials that were created in a specific time range. The list can be sorted by trial name or creation time.</td>
</tr>
<tr>
    <td><a href="#create_trial"><CopyableCode code="create_trial" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TrialName"><code>TrialName</code></a>, <a href="#parameter-ExperimentName"><code>ExperimentName</code></a></td>
    <td></td>
    <td>Creates an SageMaker trial. A trial is a set of steps called trial components that produce a machine learning model. A trial is part of a single SageMaker experiment. When you use SageMaker Studio or the SageMaker Python SDK, all experiments, trials, and trial components are automatically tracked, logged, and indexed. When you use the Amazon Web Services SDK for Python (Boto), you must use the logging APIs provided by the SDK. You can add tags to a trial and then use the Search API to search for the tags. To get a list of all your trials, call the ListTrials API. To view a trial's properties, call the DescribeTrial API. To create a trial component, call the CreateTrialComponent API.</td>
</tr>
<tr>
    <td><a href="#update_trial"><CopyableCode code="update_trial" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TrialName"><code>TrialName</code></a></td>
    <td></td>
    <td>Updates the display name of a trial.</td>
</tr>
<tr>
    <td><a href="#delete_trial"><CopyableCode code="delete_trial" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified trial. All trial components that make up the trial must be deleted first. Use the DescribeTrialComponent API to get the list of trial components.</td>
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
    defaultValue="describe_trial"
    values={[
        { label: 'describe_trial', value: 'describe_trial' },
        { label: 'list_trials', value: 'list_trials' }
    ]}
>
<TabItem value="describe_trial">

Provides a list of a trial's properties.

```sql
SELECT
created_by,
creation_time,
display_name,
experiment_name,
last_modified_by,
last_modified_time,
metadata_properties,
source,
trial_arn,
trial_name
FROM aws.sagemaker.trials
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_trials">

Lists the trials in your account. Specify an experiment name to limit the list to the trials that are part of that experiment. Specify a trial component name to limit the list to the trials that associated with that trial component. The list can be filtered to show only trials that were created in a specific time range. The list can be sorted by trial name or creation time.

```sql
SELECT
creation_time,
display_name,
last_modified_time,
trial_arn,
trial_name,
trial_source
FROM aws.sagemaker.trials
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_trial"
    values={[
        { label: 'create_trial', value: 'create_trial' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_trial">

Creates an SageMaker trial. A trial is a set of steps called trial components that produce a machine learning model. A trial is part of a single SageMaker experiment. When you use SageMaker Studio or the SageMaker Python SDK, all experiments, trials, and trial components are automatically tracked, logged, and indexed. When you use the Amazon Web Services SDK for Python (Boto), you must use the logging APIs provided by the SDK. You can add tags to a trial and then use the Search API to search for the tags. To get a list of all your trials, call the ListTrials API. To view a trial's properties, call the DescribeTrial API. To create a trial component, call the CreateTrialComponent API.

```sql
INSERT INTO aws.sagemaker.trials (
TrialName,
DisplayName,
ExperimentName,
MetadataProperties,
Tags,
region
)
SELECT 
'{{ TrialName }}' /* required */,
'{{ DisplayName }}',
'{{ ExperimentName }}' /* required */,
'{{ MetadataProperties }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
trial_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: trials
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the trials resource.
    - name: TrialName
      value: "{{ TrialName }}"
      description: |
        The name of the trial. The name must be unique in your Amazon Web Services account and is not case-sensitive.
    - name: DisplayName
      value: "{{ DisplayName }}"
      description: |
        The name of the trial as displayed. The name doesn't need to be unique. If DisplayName isn't specified, TrialName is displayed.
    - name: ExperimentName
      value: "{{ ExperimentName }}"
      description: |
        The name of the experiment to associate the trial with.
    - name: MetadataProperties
      description: |
        Metadata properties of the tracking entity, trial, or trial component.
      value:
        CommitId: "{{ CommitId }}"
        Repository: "{{ Repository }}"
        GeneratedBy: "{{ GeneratedBy }}"
        ProjectId: "{{ ProjectId }}"
    - name: Tags
      description: |
        A list of tags to associate with the trial. You can use Search API to search on the tags.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_trial"
    values={[
        { label: 'update_trial', value: 'update_trial' }
    ]}
>
<TabItem value="update_trial">

Updates the display name of a trial.

```sql
UPDATE aws.sagemaker.trials
SET 
TrialName = '{{ TrialName }}',
DisplayName = '{{ DisplayName }}'
WHERE 
region = '{{ region }}' --required
AND TrialName = '{{ TrialName }}' --required
RETURNING
trial_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_trial"
    values={[
        { label: 'delete_trial', value: 'delete_trial' }
    ]}
>
<TabItem value="delete_trial">

Deletes the specified trial. All trial components that make up the trial must be deleted first. Use the DescribeTrialComponent API to get the list of trial components.

```sql
DELETE FROM aws.sagemaker.trials
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
