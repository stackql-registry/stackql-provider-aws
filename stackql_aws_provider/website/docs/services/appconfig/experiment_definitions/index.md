--- 
title: experiment_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - experiment_definitions
  - appconfig
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

Creates, updates, deletes, gets or lists an <code>experiment_definitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="experiment_definitions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appconfig.experiment_definitions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_experiment_definition"
    values={[
        { label: 'get_experiment_definition', value: 'get_experiment_definition' },
        { label: 'list_experiment_definitions', value: 'list_experiment_definitions' }
    ]}
>
<TabItem value="get_experiment_definition">

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
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The application ID. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;4,7&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="audience_description" /></td>
    <td><code>string</code></td>
    <td>A description of the intended audience for the experiment.</td>
</tr>
<tr>
    <td><CopyableCode code="audience_rule" /></td>
    <td><code>string</code></td>
    <td>The rule that defines which users are eligible to be assigned to treatments.</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_profile_id" /></td>
    <td><code>string</code></td>
    <td>The configuration profile ID associated with the experiment. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;4,7&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="control" /></td>
    <td><code>object</code></td>
    <td>Describes a treatment in an experiment, including its traffic allocation weight and feature flag value.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the experiment definition was created, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>The environment ID where the experiment runs. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;4,7&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="flag_key" /></td>
    <td><code>string</code></td>
    <td>The key of the feature flag used by the experiment. (pattern: &lt;code&gt;^&#91;a-z&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="hypothesis" /></td>
    <td><code>string</code></td>
    <td>The hypothesis that the experiment is designed to validate.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The experiment definition ID. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;4,7&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_identifier" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the KMS key used to encrypt experiment data.</td>
</tr>
<tr>
    <td><CopyableCode code="launch_criteria" /></td>
    <td><code>string</code></td>
    <td>The conditions under which the winning treatment should be launched.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the experiment definition.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the experiment definition. Valid values: ACTIVE, IDLE, ARCHIVED. (ACTIVE, IDLE, ARCHIVED)</td>
</tr>
<tr>
    <td><CopyableCode code="treatments" /></td>
    <td><code>array</code></td>
    <td>The list of treatments defined for the experiment.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the experiment definition was last updated, in ISO 8601 format.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_experiment_definitions">

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
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The application ID. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;4,7&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_profile_id" /></td>
    <td><code>string</code></td>
    <td>The configuration profile ID associated with the experiment. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;4,7&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the experiment definition was created, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>The environment ID where the experiment runs. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;4,7&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="flag_key" /></td>
    <td><code>string</code></td>
    <td>The key of the feature flag used by the experiment. (pattern: &lt;code&gt;^&#91;a-z&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="hypothesis" /></td>
    <td><code>string</code></td>
    <td>The hypothesis that the experiment is designed to validate.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The experiment definition ID. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;4,7&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the experiment definition.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the experiment definition. (ACTIVE, IDLE, ARCHIVED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the experiment definition was last updated, in ISO 8601 format.</td>
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
    <td><a href="#get_experiment_definition"><CopyableCode code="get_experiment_definition" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_identifier"><code>application_identifier</code></a>, <a href="#parameter-experiment_definition_identifier"><code>experiment_definition_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about an experiment definition.</td>
</tr>
<tr>
    <td><a href="#list_experiment_definitions"><CopyableCode code="list_experiment_definitions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-application_identifier"><code>application_identifier</code></a>, <a href="#parameter-configuration_profile_identifier"><code>configuration_profile_identifier</code></a>, <a href="#parameter-environment_identifier"><code>environment_identifier</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-max_results"><code>max_results</code></a>, <a href="#parameter-next_token"><code>next_token</code></a></td>
    <td>Lists the experiment definitions for an account. You can filter results by application, configuration profile, environment, or status.</td>
</tr>
<tr>
    <td><a href="#create_experiment_definition"><CopyableCode code="create_experiment_definition" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-application_identifier"><code>application_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConfigurationProfileIdentifier"><code>ConfigurationProfileIdentifier</code></a>, <a href="#parameter-EnvironmentIdentifier"><code>EnvironmentIdentifier</code></a>, <a href="#parameter-FlagKey"><code>FlagKey</code></a>, <a href="#parameter-AudienceRule"><code>AudienceRule</code></a></td>
    <td></td>
    <td>Creates an experiment definition in AppConfig. An experiment definition describes the purpose, scope, and operational configuration of an experiment, including the target audience, feature flag, and treatment configurations.</td>
</tr>
<tr>
    <td><a href="#update_experiment_definition"><CopyableCode code="update_experiment_definition" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-application_identifier"><code>application_identifier</code></a>, <a href="#parameter-experiment_definition_identifier"><code>experiment_definition_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an experiment definition. You can update treatments, the control, audience rules, and other properties. You cannot update an experiment definition while an experiment run is active.</td>
</tr>
<tr>
    <td><a href="#delete_experiment_definition"><CopyableCode code="delete_experiment_definition" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-application_identifier"><code>application_identifier</code></a>, <a href="#parameter-experiment_definition_identifier"><code>experiment_definition_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-delete_type"><code>delete_type</code></a></td>
    <td>Deletes an experiment definition. You can archive the definition to hide it from the active list while preserving it for future reference, or permanently delete it along with all associated run history.</td>
</tr>
<tr>
    <td><a href="#start_experiment_run"><CopyableCode code="start_experiment_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-application_identifier"><code>application_identifier</code></a>, <a href="#parameter-experiment_definition_identifier"><code>experiment_definition_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Starts an experiment run for the specified experiment definition. An experiment run delivers treatments to the target audience and collects metrics. You can start multiple experiment runs from the same experiment definition. Billing for this experiment begins when you call this operation and continues until the experiment is stopped. For pricing details, see AppConfig pricing.</td>
</tr>
<tr>
    <td><a href="#stop_experiment_run"><CopyableCode code="stop_experiment_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-application_identifier"><code>application_identifier</code></a>, <a href="#parameter-experiment_definition_identifier"><code>experiment_definition_identifier</code></a>, <a href="#parameter-run"><code>run</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Stops a running experiment. Stopping an experiment run ends audience exposure and returns users to the currently deployed feature flag configuration.</td>
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
<tr id="parameter-application_identifier">
    <td><CopyableCode code="application_identifier" /></td>
    <td><code>string</code></td>
    <td>The application ID or name.</td>
</tr>
<tr id="parameter-experiment_definition_identifier">
    <td><CopyableCode code="experiment_definition_identifier" /></td>
    <td><code>string</code></td>
    <td>The experiment definition ID or name.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-run">
    <td><CopyableCode code="run" /></td>
    <td><code>integer</code></td>
    <td>The run number to stop.</td>
</tr>
<tr id="parameter-application_identifier">
    <td><CopyableCode code="application_identifier" /></td>
    <td><code>string</code></td>
    <td>The application ID or name to filter results.</td>
</tr>
<tr id="parameter-configuration_profile_identifier">
    <td><CopyableCode code="configuration_profile_identifier" /></td>
    <td><code>string</code></td>
    <td>The configuration profile ID or name to filter results.</td>
</tr>
<tr id="parameter-delete_type">
    <td><CopyableCode code="delete_type" /></td>
    <td><code>string</code></td>
    <td>The type of deletion to perform. Valid values include archive (hide but preserve) and permanent (delete permanently).</td>
</tr>
<tr id="parameter-environment_identifier">
    <td><CopyableCode code="environment_identifier" /></td>
    <td><code>string</code></td>
    <td>The environment ID or name to filter results.</td>
</tr>
<tr id="parameter-max_results">
    <td><CopyableCode code="max_results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this call.</td>
</tr>
<tr id="parameter-next_token">
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A token to start the list from a previously truncated response.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>A filter for the experiment definition status.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_experiment_definition"
    values={[
        { label: 'get_experiment_definition', value: 'get_experiment_definition' },
        { label: 'list_experiment_definitions', value: 'list_experiment_definitions' }
    ]}
>
<TabItem value="get_experiment_definition">

Retrieves information about an experiment definition.

```sql
SELECT
application_id,
audience_description,
audience_rule,
configuration_profile_id,
control,
created_at,
environment_id,
flag_key,
hypothesis,
id,
kms_key_identifier,
launch_criteria,
name,
status,
treatments,
updated_at
FROM aws.appconfig.experiment_definitions
WHERE application_identifier = '{{ application_identifier }}' -- required
AND experiment_definition_identifier = '{{ experiment_definition_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_experiment_definitions">

Lists the experiment definitions for an account. You can filter results by application, configuration profile, environment, or status.

```sql
SELECT
application_id,
configuration_profile_id,
created_at,
environment_id,
flag_key,
hypothesis,
id,
name,
status,
updated_at
FROM aws.appconfig.experiment_definitions
WHERE region = '{{ region }}' -- required
AND application_identifier = '{{ application_identifier }}'
AND configuration_profile_identifier = '{{ configuration_profile_identifier }}'
AND environment_identifier = '{{ environment_identifier }}'
AND status = '{{ status }}'
AND max_results = '{{ max_results }}'
AND next_token = '{{ next_token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_experiment_definition"
    values={[
        { label: 'create_experiment_definition', value: 'create_experiment_definition' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_experiment_definition">

Creates an experiment definition in AppConfig. An experiment definition describes the purpose, scope, and operational configuration of an experiment, including the target audience, feature flag, and treatment configurations.

```sql
INSERT INTO aws.appconfig.experiment_definitions (
Name,
ConfigurationProfileIdentifier,
EnvironmentIdentifier,
FlagKey,
Treatments,
Control,
AudienceRule,
Hypothesis,
AudienceDescription,
LaunchCriteria,
Tags,
application_identifier,
region
)
SELECT 
'{{ Name }}',
'{{ ConfigurationProfileIdentifier }}' /* required */,
'{{ EnvironmentIdentifier }}' /* required */,
'{{ FlagKey }}' /* required */,
'{{ Treatments }}',
'{{ Control }}',
'{{ AudienceRule }}' /* required */,
'{{ Hypothesis }}',
'{{ AudienceDescription }}',
'{{ LaunchCriteria }}',
'{{ Tags }}',
'{{ application_identifier }}',
'{{ region }}'
RETURNING
application_id,
audience_description,
audience_rule,
configuration_profile_id,
control,
created_at,
environment_id,
flag_key,
hypothesis,
id,
kms_key_identifier,
launch_criteria,
name,
status,
treatments,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: experiment_definitions
  props:
    - name: application_identifier
      value: "{{ application_identifier }}"
      description: Required parameter for the experiment_definitions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the experiment_definitions resource.
    - name: Name
      value: "{{ Name }}"
    - name: ConfigurationProfileIdentifier
      value: "{{ ConfigurationProfileIdentifier }}"
    - name: EnvironmentIdentifier
      value: "{{ EnvironmentIdentifier }}"
    - name: FlagKey
      value: "{{ FlagKey }}"
    - name: Treatments
      value:
        - Weight: {{ Weight }}
          Description: "{{ Description }}"
          FlagValue:
            Enabled: {{ Enabled }}
            AttributeValues: "{{ AttributeValues }}"
    - name: Control
      description: |
        Input structure for defining a treatment when creating or updating an experiment definition.
      value:
        Weight: {{ Weight }}
        Description: "{{ Description }}"
        FlagValue:
          Enabled: {{ Enabled }}
          AttributeValues: "{{ AttributeValues }}"
    - name: AudienceRule
      value: "{{ AudienceRule }}"
    - name: Hypothesis
      value: "{{ Hypothesis }}"
    - name: AudienceDescription
      value: "{{ AudienceDescription }}"
    - name: LaunchCriteria
      value: "{{ LaunchCriteria }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_experiment_definition"
    values={[
        { label: 'update_experiment_definition', value: 'update_experiment_definition' }
    ]}
>
<TabItem value="update_experiment_definition">

Updates an experiment definition. You can update treatments, the control, audience rules, and other properties. You cannot update an experiment definition while an experiment run is active.

```sql
UPDATE aws.appconfig.experiment_definitions
SET 
Treatments = '{{ Treatments }}',
Control = '{{ Control }}',
Hypothesis = '{{ Hypothesis }}',
AudienceRule = '{{ AudienceRule }}',
AudienceDescription = '{{ AudienceDescription }}',
LaunchCriteria = '{{ LaunchCriteria }}'
WHERE 
application_identifier = '{{ application_identifier }}' --required
AND experiment_definition_identifier = '{{ experiment_definition_identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
application_id,
audience_description,
audience_rule,
configuration_profile_id,
control,
created_at,
environment_id,
flag_key,
hypothesis,
id,
kms_key_identifier,
launch_criteria,
name,
status,
treatments,
updated_at;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_experiment_definition"
    values={[
        { label: 'delete_experiment_definition', value: 'delete_experiment_definition' }
    ]}
>
<TabItem value="delete_experiment_definition">

Deletes an experiment definition. You can archive the definition to hide it from the active list while preserving it for future reference, or permanently delete it along with all associated run history.

```sql
DELETE FROM aws.appconfig.experiment_definitions
WHERE application_identifier = '{{ application_identifier }}' --required
AND experiment_definition_identifier = '{{ experiment_definition_identifier }}' --required
AND region = '{{ region }}' --required
AND delete_type = '{{ delete_type }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_experiment_run"
    values={[
        { label: 'start_experiment_run', value: 'start_experiment_run' },
        { label: 'stop_experiment_run', value: 'stop_experiment_run' }
    ]}
>
<TabItem value="start_experiment_run">

Starts an experiment run for the specified experiment definition. An experiment run delivers treatments to the target audience and collects metrics. You can start multiple experiment runs from the same experiment definition. Billing for this experiment begins when you call this operation and continues until the experiment is stopped. For pricing details, see AppConfig pricing.

```sql
EXEC aws.appconfig.experiment_definitions.start_experiment_run 
@application_identifier='{{ application_identifier }}' --required, 
@experiment_definition_identifier='{{ experiment_definition_identifier }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Description": "{{ Description }}", 
"ExposurePercentage": {{ ExposurePercentage }}, 
"TreatmentOverrides": "{{ TreatmentOverrides }}", 
"Tags": "{{ Tags }}", 
"DeploymentParameters": "{{ DeploymentParameters }}"
}'
;
```
</TabItem>
<TabItem value="stop_experiment_run">

Stops a running experiment. Stopping an experiment run ends audience exposure and returns users to the currently deployed feature flag configuration.

```sql
EXEC aws.appconfig.experiment_definitions.stop_experiment_run 
@application_identifier='{{ application_identifier }}' --required, 
@experiment_definition_identifier='{{ experiment_definition_identifier }}' --required, 
@run='{{ run }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Result": "{{ Result }}", 
"DeploymentParameters": "{{ DeploymentParameters }}"
}'
;
```
</TabItem>
</Tabs>
