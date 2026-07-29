--- 
title: experiment_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - experiment_templates
  - fis
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

Creates, updates, deletes, gets or lists an <code>experiment_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="experiment_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.fis.experiment_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_experiment_template"
    values={[
        { label: 'get_experiment_template', value: 'get_experiment_template' },
        { label: 'list_experiment_templates', value: 'list_experiment_templates' }
    ]}
>
<TabItem value="get_experiment_template">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the experiment template. (pattern: &lt;code&gt;&#91;\S&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="actions" /></td>
    <td><code>object</code></td>
    <td>The actions for the experiment.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the experiment template. (pattern: &lt;code&gt;&#91;\S&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the experiment template was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description for the experiment template. (pattern: &lt;code&gt;&#91;\s\S&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="experiment_options" /></td>
    <td><code>object</code></td>
    <td>The experiment options for an experiment template.</td>
</tr>
<tr>
    <td><CopyableCode code="experiment_report_configuration" /></td>
    <td><code>object</code></td>
    <td>Describes the report configuration for the experiment template.</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the experiment template was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="log_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration for experiment logging.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of an IAM role. (pattern: &lt;code&gt;&#91;\S&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="stop_conditions" /></td>
    <td><code>array</code></td>
    <td>The stop conditions for the experiment.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags for the experiment template.</td>
</tr>
<tr>
    <td><CopyableCode code="target_account_configurations_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>The count of target account configurations for the experiment template.</td>
</tr>
<tr>
    <td><CopyableCode code="targets" /></td>
    <td><code>object</code></td>
    <td>The targets for the experiment.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_experiment_templates">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the experiment template. (pattern: &lt;code&gt;&#91;\S&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the experiment template. (pattern: &lt;code&gt;&#91;\S&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the experiment template was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the experiment template. (pattern: &lt;code&gt;&#91;\s\S&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the experiment template was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags for the experiment template.</td>
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
    <td><a href="#get_experiment_template"><CopyableCode code="get_experiment_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified experiment template.</td>
</tr>
<tr>
    <td><a href="#list_experiment_templates"><CopyableCode code="list_experiment_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists your experiment templates.</td>
</tr>
<tr>
    <td><a href="#create_experiment_template"><CopyableCode code="create_experiment_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a>, <a href="#parameter-description"><code>description</code></a>, <a href="#parameter-stopConditions"><code>stopConditions</code></a>, <a href="#parameter-actions"><code>actions</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a></td>
    <td></td>
    <td>Creates an experiment template. An experiment template includes the following components: Targets: A target can be a specific resource in your Amazon Web Services environment, or one or more resources that match criteria that you specify, for example, resources that have specific tags. Actions: The actions to carry out on the target. You can specify multiple actions, the duration of each action, and when to start each action during an experiment. Stop conditions: If a stop condition is triggered while an experiment is running, the experiment is automatically stopped. You can define a stop condition as a CloudWatch alarm. For more information, see experiment templates in the Fault Injection Service User Guide.</td>
</tr>
<tr>
    <td><a href="#update_experiment_template"><CopyableCode code="update_experiment_template" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the specified experiment template.</td>
</tr>
<tr>
    <td><a href="#delete_experiment_template"><CopyableCode code="delete_experiment_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified experiment template.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the experiment template.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_experiment_template"
    values={[
        { label: 'get_experiment_template', value: 'get_experiment_template' },
        { label: 'list_experiment_templates', value: 'list_experiment_templates' }
    ]}
>
<TabItem value="get_experiment_template">

Gets information about the specified experiment template.

```sql
SELECT
id,
actions,
arn,
creation_time,
description,
experiment_options,
experiment_report_configuration,
last_update_time,
log_configuration,
role_arn,
stop_conditions,
tags,
target_account_configurations_count,
targets
FROM aws.fis.experiment_templates
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_experiment_templates">

Lists your experiment templates.

```sql
SELECT
id,
arn,
creation_time,
description,
last_update_time,
tags
FROM aws.fis.experiment_templates
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_experiment_template"
    values={[
        { label: 'create_experiment_template', value: 'create_experiment_template' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_experiment_template">

Creates an experiment template. An experiment template includes the following components: Targets: A target can be a specific resource in your Amazon Web Services environment, or one or more resources that match criteria that you specify, for example, resources that have specific tags. Actions: The actions to carry out on the target. You can specify multiple actions, the duration of each action, and when to start each action during an experiment. Stop conditions: If a stop condition is triggered while an experiment is running, the experiment is automatically stopped. You can define a stop condition as a CloudWatch alarm. For more information, see experiment templates in the Fault Injection Service User Guide.

```sql
INSERT INTO aws.fis.experiment_templates (
clientToken,
description,
stopConditions,
targets,
actions,
roleArn,
tags,
logConfiguration,
experimentOptions,
experimentReportConfiguration,
region
)
SELECT 
'{{ clientToken }}' /* required */,
'{{ description }}' /* required */,
'{{ stopConditions }}' /* required */,
'{{ targets }}',
'{{ actions }}' /* required */,
'{{ roleArn }}' /* required */,
'{{ tags }}',
'{{ logConfiguration }}',
'{{ experimentOptions }}',
'{{ experimentReportConfiguration }}',
'{{ region }}'
RETURNING
experiment_template
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: experiment_templates
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the experiment_templates resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: description
      value: "{{ description }}"
    - name: stopConditions
      value:
        - source: "{{ source }}"
          value: "{{ value }}"
    - name: targets
      value: "{{ targets }}"
    - name: actions
      value: "{{ actions }}"
    - name: roleArn
      value: "{{ roleArn }}"
    - name: tags
      value: "{{ tags }}"
    - name: logConfiguration
      description: |
        Specifies the configuration for experiment logging.
      value:
        cloudWatchLogsConfiguration:
          logGroupArn: "{{ logGroupArn }}"
        s3Configuration:
          bucketName: "{{ bucketName }}"
          prefix: "{{ prefix }}"
        logSchemaVersion: {{ logSchemaVersion }}
    - name: experimentOptions
      description: |
        Specifies experiment options for an experiment template.
      value:
        accountTargeting: "{{ accountTargeting }}"
        emptyTargetResolutionMode: "{{ emptyTargetResolutionMode }}"
    - name: experimentReportConfiguration
      description: |
        Specifies the configuration for experiment reports.
      value:
        outputs:
          s3Configuration:
            bucketName: "{{ bucketName }}"
            prefix: "{{ prefix }}"
        dataSources:
          cloudWatchDashboards:
            - dashboardIdentifier: "{{ dashboardIdentifier }}"
        preExperimentDuration: "{{ preExperimentDuration }}"
        postExperimentDuration: "{{ postExperimentDuration }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_experiment_template"
    values={[
        { label: 'update_experiment_template', value: 'update_experiment_template' }
    ]}
>
<TabItem value="update_experiment_template">

Updates the specified experiment template.

```sql
UPDATE aws.fis.experiment_templates
SET 
description = '{{ description }}',
stopConditions = '{{ stopConditions }}',
targets = '{{ targets }}',
actions = '{{ actions }}',
roleArn = '{{ roleArn }}',
logConfiguration = '{{ logConfiguration }}',
experimentOptions = '{{ experimentOptions }}',
experimentReportConfiguration = '{{ experimentReportConfiguration }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
RETURNING
experiment_template;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_experiment_template"
    values={[
        { label: 'delete_experiment_template', value: 'delete_experiment_template' }
    ]}
>
<TabItem value="delete_experiment_template">

Deletes the specified experiment template.

```sql
DELETE FROM aws.fis.experiment_templates
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
