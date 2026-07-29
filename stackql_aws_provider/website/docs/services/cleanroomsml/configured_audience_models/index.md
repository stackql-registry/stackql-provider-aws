--- 
title: configured_audience_models
hide_title: false
hide_table_of_contents: false
keywords:
  - configured_audience_models
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

Creates, updates, deletes, gets or lists a <code>configured_audience_models</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="configured_audience_models" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cleanroomsml.configured_audience_models" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_configured_audience_model"
    values={[
        { label: 'get_configured_audience_model', value: 'get_configured_audience_model' },
        { label: 'list_configured_audience_models', value: 'list_configured_audience_models' }
    ]}
>
<TabItem value="get_configured_audience_model">

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
    <td>The name of the configured audience model. (pattern: &lt;code&gt;(?!\s*$)&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="audience_model_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the audience model used for this configured audience model. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:audience-model/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="audience_size_config" /></td>
    <td><code>object</code></td>
    <td>Returns the relevance scores at these audience sizes when used in the GetAudienceGenerationJob for a specified audience generation job and configured audience model. Specifies the list of allowed audienceSize values when used in the StartAudienceExportJob for an audience generation job. You can use the ABSOLUTE AudienceSize to configure out audience sizes using the count of identifiers in the output. You can use the Percentage AudienceSize to configure sizes in the range 1-100 percent.</td>
</tr>
<tr>
    <td><CopyableCode code="child_resource_tag_on_create_policy" /></td>
    <td><code>string</code></td>
    <td>Provides the childResourceTagOnCreatePolicy that was used for this configured audience model. (FROM_PARENT_RESOURCE, NONE)</td>
</tr>
<tr>
    <td><CopyableCode code="configured_audience_model_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the configured audience model. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:configured-audience-model/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the configured audience model was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the configured audience model. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="min_matching_seed_size" /></td>
    <td><code>integer</code></td>
    <td>The minimum number of users from the seed audience that must match with users in the training data of the audience model.</td>
</tr>
<tr>
    <td><CopyableCode code="output_config" /></td>
    <td><code>object</code></td>
    <td>Configuration information necessary for the configure audience model output.</td>
</tr>
<tr>
    <td><CopyableCode code="shared_audience_metrics" /></td>
    <td><code>array</code></td>
    <td>Whether audience metrics are shared.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the configured audience model. (ACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags that are associated to this configured audience model.</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent time at which the configured audience model was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_configured_audience_models">

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
    <td>The name of the configured audience model. (pattern: &lt;code&gt;(?!\s*$)&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="audience_model_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the audience model that was used to create the configured audience model. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:audience-model/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configured_audience_model_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the configured audience model that you are interested in. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:configured-audience-model/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the configured audience model was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the configured audience model. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="output_config" /></td>
    <td><code>object</code></td>
    <td>Configuration information necessary for the configure audience model output.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the configured audience model. (ACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent time at which the configured audience model was updated.</td>
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
    <td><a href="#get_configured_audience_model"><CopyableCode code="get_configured_audience_model" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-configured_audience_model_arn"><code>configured_audience_model_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a specified configured audience model.</td>
</tr>
<tr>
    <td><a href="#list_configured_audience_models"><CopyableCode code="list_configured_audience_models" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns a list of the configured audience models.</td>
</tr>
<tr>
    <td><a href="#create_configured_audience_model"><CopyableCode code="create_configured_audience_model" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-audienceModelArn"><code>audienceModelArn</code></a>, <a href="#parameter-outputConfig"><code>outputConfig</code></a>, <a href="#parameter-sharedAudienceMetrics"><code>sharedAudienceMetrics</code></a></td>
    <td></td>
    <td>Defines the information necessary to create a configured audience model.</td>
</tr>
<tr>
    <td><a href="#update_configured_audience_model"><CopyableCode code="update_configured_audience_model" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-configured_audience_model_arn"><code>configured_audience_model_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides the information necessary to update a configured audience model. Updates that impact audience generation jobs take effect when a new job starts, but do not impact currently running jobs.</td>
</tr>
<tr>
    <td><a href="#delete_configured_audience_model"><CopyableCode code="delete_configured_audience_model" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-configured_audience_model_arn"><code>configured_audience_model_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified configured audience model. You can't delete a configured audience model if there are any lookalike models that use the configured audience model. If you delete a configured audience model, it will be removed from any collaborations that it is associated to.</td>
</tr>
<tr>
    <td><a href="#start_audience_generation_job"><CopyableCode code="start_audience_generation_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-configuredAudienceModelArn"><code>configuredAudienceModelArn</code></a>, <a href="#parameter-seedAudience"><code>seedAudience</code></a></td>
    <td></td>
    <td>Information necessary to start the audience generation job.</td>
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
<tr id="parameter-configured_audience_model_arn">
    <td><CopyableCode code="configured_audience_model_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the configured audience model that you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_configured_audience_model"
    values={[
        { label: 'get_configured_audience_model', value: 'get_configured_audience_model' },
        { label: 'list_configured_audience_models', value: 'list_configured_audience_models' }
    ]}
>
<TabItem value="get_configured_audience_model">

Returns information about a specified configured audience model.

```sql
SELECT
name,
audience_model_arn,
audience_size_config,
child_resource_tag_on_create_policy,
configured_audience_model_arn,
create_time,
description,
min_matching_seed_size,
output_config,
shared_audience_metrics,
status,
tags,
update_time
FROM aws.cleanroomsml.configured_audience_models
WHERE configured_audience_model_arn = '{{ configured_audience_model_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_configured_audience_models">

Returns a list of the configured audience models.

```sql
SELECT
name,
audience_model_arn,
configured_audience_model_arn,
create_time,
description,
output_config,
status,
update_time
FROM aws.cleanroomsml.configured_audience_models
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_configured_audience_model"
    values={[
        { label: 'create_configured_audience_model', value: 'create_configured_audience_model' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_configured_audience_model">

Defines the information necessary to create a configured audience model.

```sql
INSERT INTO aws.cleanroomsml.configured_audience_models (
name,
audienceModelArn,
outputConfig,
description,
sharedAudienceMetrics,
minMatchingSeedSize,
audienceSizeConfig,
tags,
childResourceTagOnCreatePolicy,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ audienceModelArn }}' /* required */,
'{{ outputConfig }}' /* required */,
'{{ description }}',
'{{ sharedAudienceMetrics }}' /* required */,
{{ minMatchingSeedSize }},
'{{ audienceSizeConfig }}',
'{{ tags }}',
'{{ childResourceTagOnCreatePolicy }}',
'{{ region }}'
RETURNING
configured_audience_model_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: configured_audience_models
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the configured_audience_models resource.
    - name: name
      value: "{{ name }}"
    - name: audienceModelArn
      value: "{{ audienceModelArn }}"
    - name: outputConfig
      description: |
        Configuration information necessary for the configure audience model output.
      value:
        destination:
          s3Destination:
            s3Uri: "{{ s3Uri }}"
        roleArn: "{{ roleArn }}"
    - name: description
      value: "{{ description }}"
    - name: sharedAudienceMetrics
      value:
        - "{{ sharedAudienceMetrics }}"
    - name: minMatchingSeedSize
      value: {{ minMatchingSeedSize }}
    - name: audienceSizeConfig
      description: |
        Returns the relevance scores at these audience sizes when used in the GetAudienceGenerationJob for a specified audience generation job and configured audience model. Specifies the list of allowed audienceSize values when used in the StartAudienceExportJob for an audience generation job. You can use the ABSOLUTE AudienceSize to configure out audience sizes using the count of identifiers in the output. You can use the Percentage AudienceSize to configure sizes in the range 1-100 percent.
      value:
        audienceSizeType: "{{ audienceSizeType }}"
        audienceSizeBins:
          - {{ audienceSizeBins }}
    - name: tags
      value: "{{ tags }}"
    - name: childResourceTagOnCreatePolicy
      value: "{{ childResourceTagOnCreatePolicy }}"
      valid_values: ['FROM_PARENT_RESOURCE', 'NONE']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_configured_audience_model"
    values={[
        { label: 'update_configured_audience_model', value: 'update_configured_audience_model' }
    ]}
>
<TabItem value="update_configured_audience_model">

Provides the information necessary to update a configured audience model. Updates that impact audience generation jobs take effect when a new job starts, but do not impact currently running jobs.

```sql
UPDATE aws.cleanroomsml.configured_audience_models
SET 
outputConfig = '{{ outputConfig }}',
audienceModelArn = '{{ audienceModelArn }}',
sharedAudienceMetrics = '{{ sharedAudienceMetrics }}',
minMatchingSeedSize = {{ minMatchingSeedSize }},
audienceSizeConfig = '{{ audienceSizeConfig }}',
description = '{{ description }}'
WHERE 
configured_audience_model_arn = '{{ configured_audience_model_arn }}' --required
AND region = '{{ region }}' --required
RETURNING
configured_audience_model_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_configured_audience_model"
    values={[
        { label: 'delete_configured_audience_model', value: 'delete_configured_audience_model' }
    ]}
>
<TabItem value="delete_configured_audience_model">

Deletes the specified configured audience model. You can't delete a configured audience model if there are any lookalike models that use the configured audience model. If you delete a configured audience model, it will be removed from any collaborations that it is associated to.

```sql
DELETE FROM aws.cleanroomsml.configured_audience_models
WHERE configured_audience_model_arn = '{{ configured_audience_model_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_audience_generation_job"
    values={[
        { label: 'start_audience_generation_job', value: 'start_audience_generation_job' }
    ]}
>
<TabItem value="start_audience_generation_job">

Information necessary to start the audience generation job.

```sql
EXEC aws.cleanroomsml.configured_audience_models.start_audience_generation_job 
@region='{{ region }}' --required 
@@json=
'{
"name": "{{ name }}", 
"configuredAudienceModelArn": "{{ configuredAudienceModelArn }}", 
"seedAudience": "{{ seedAudience }}", 
"includeSeedInOutput": {{ includeSeedInOutput }}, 
"collaborationId": "{{ collaborationId }}", 
"description": "{{ description }}", 
"tags": "{{ tags }}"
}'
;
```
</TabItem>
</Tabs>
