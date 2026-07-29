--- 
title: security_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - security_profiles
  - iot
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

Creates, updates, deletes, gets or lists a <code>security_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="security_profiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.security_profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_security_profile"
    values={[
        { label: 'describe_security_profile', value: 'describe_security_profile' },
        { label: 'list_security_profiles', value: 'list_security_profiles' }
    ]}
>
<TabItem value="describe_security_profile">

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
    <td><CopyableCode code="additional_metrics_to_retain" /></td>
    <td><code>array</code></td>
    <td>Please use DescribeSecurityProfileResponse$additionalMetricsToRetainV2 instead. A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's behaviors, but it is also retained for any metric specified here.</td>
</tr>
<tr>
    <td><CopyableCode code="additional_metrics_to_retain_v2" /></td>
    <td><code>array</code></td>
    <td>A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's behaviors, but it is also retained for any metric specified here.</td>
</tr>
<tr>
    <td><CopyableCode code="alert_targets" /></td>
    <td><code>object</code></td>
    <td>Where the alerts are sent. (Alerts are always sent to the console.)</td>
</tr>
<tr>
    <td><CopyableCode code="behaviors" /></td>
    <td><code>array</code></td>
    <td>Specifies the behaviors that, when violated by a device (thing), cause an alert.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the security profile was created.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the security profile was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="metrics_export_config" /></td>
    <td><code>object</code></td>
    <td>Set configurations for metrics export.</td>
</tr>
<tr>
    <td><CopyableCode code="security_profile_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the security profile.</td>
</tr>
<tr>
    <td><CopyableCode code="security_profile_description" /></td>
    <td><code>string</code></td>
    <td>A description of the security profile (associated with the security profile when it was created or updated). (pattern: &lt;code&gt;&#91;\p&#123;Graph&#125;\x20&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="security_profile_name" /></td>
    <td><code>string</code></td>
    <td>The name of the security profile. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version of the security profile. A new version is generated whenever the security profile is updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_security_profiles">

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
    <td>The name you've given to the security profile. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the security profile.</td>
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
    <td><a href="#describe_security_profile"><CopyableCode code="describe_security_profile" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-security_profile_name"><code>security_profile_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a Device Defender security profile. Requires permission to access the DescribeSecurityProfile action.</td>
</tr>
<tr>
    <td><a href="#list_security_profiles"><CopyableCode code="list_security_profiles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-dimensionName"><code>dimensionName</code></a>, <a href="#parameter-metricName"><code>metricName</code></a></td>
    <td>Lists the Device Defender security profiles you've created. You can filter security profiles by dimension or custom metric. Requires permission to access the ListSecurityProfiles action. dimensionName and metricName cannot be used in the same request.</td>
</tr>
<tr>
    <td><a href="#create_security_profile"><CopyableCode code="create_security_profile" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-security_profile_name"><code>security_profile_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a Device Defender security profile. Requires permission to access the CreateSecurityProfile action.</td>
</tr>
<tr>
    <td><a href="#attach_security_profile"><CopyableCode code="attach_security_profile" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-security_profile_name"><code>security_profile_name</code></a>, <a href="#parameter-securityProfileTargetArn"><code>securityProfileTargetArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Associates a Device Defender security profile with a thing group or this account. Each thing group or account can have up to five security profiles associated with it. Requires permission to access the AttachSecurityProfile action.</td>
</tr>
<tr>
    <td><a href="#update_security_profile"><CopyableCode code="update_security_profile" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-security_profile_name"><code>security_profile_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-expectedVersion"><code>expectedVersion</code></a></td>
    <td>Updates a Device Defender security profile. Requires permission to access the UpdateSecurityProfile action.</td>
</tr>
<tr>
    <td><a href="#delete_security_profile"><CopyableCode code="delete_security_profile" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-security_profile_name"><code>security_profile_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-expectedVersion"><code>expectedVersion</code></a></td>
    <td>Deletes a Device Defender security profile. Requires permission to access the DeleteSecurityProfile action.</td>
</tr>
<tr>
    <td><a href="#detach_security_profile"><CopyableCode code="detach_security_profile" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-security_profile_name"><code>security_profile_name</code></a>, <a href="#parameter-securityProfileTargetArn"><code>securityProfileTargetArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates a Device Defender security profile from a thing group or from this account. Requires permission to access the DetachSecurityProfile action.</td>
</tr>
<tr>
    <td><a href="#validate_security_profile_behaviors"><CopyableCode code="validate_security_profile_behaviors" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-behaviors"><code>behaviors</code></a></td>
    <td></td>
    <td>Validates a Device Defender security profile behaviors specification. Requires permission to access the ValidateSecurityProfileBehaviors action.</td>
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
<tr id="parameter-securityProfileTargetArn">
    <td><CopyableCode code="securityProfileTargetArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the thing group from which the security profile is detached.</td>
</tr>
<tr id="parameter-security_profile_name">
    <td><CopyableCode code="security_profile_name" /></td>
    <td><code>string</code></td>
    <td>The security profile that is detached.</td>
</tr>
<tr id="parameter-dimensionName">
    <td><CopyableCode code="dimensionName" /></td>
    <td><code>string</code></td>
    <td>A filter to limit results to the security profiles that use the defined dimension. Cannot be used with metricName</td>
</tr>
<tr id="parameter-expectedVersion">
    <td><CopyableCode code="expectedVersion" /></td>
    <td><code>integer (int64)</code></td>
    <td>The expected version of the security profile. A new version is generated whenever the security profile is updated. If you specify a value that is different from the actual version, a VersionConflictException is thrown.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return at one time.</td>
</tr>
<tr id="parameter-metricName">
    <td><CopyableCode code="metricName" /></td>
    <td><code>string</code></td>
    <td>The name of the custom metric. Cannot be used with dimensionName.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_security_profile"
    values={[
        { label: 'describe_security_profile', value: 'describe_security_profile' },
        { label: 'list_security_profiles', value: 'list_security_profiles' }
    ]}
>
<TabItem value="describe_security_profile">

Gets information about a Device Defender security profile. Requires permission to access the DescribeSecurityProfile action.

```sql
SELECT
additional_metrics_to_retain,
additional_metrics_to_retain_v2,
alert_targets,
behaviors,
creation_date,
last_modified_date,
metrics_export_config,
security_profile_arn,
security_profile_description,
security_profile_name,
version
FROM aws.iot.security_profiles
WHERE security_profile_name = '{{ security_profile_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_security_profiles">

Lists the Device Defender security profiles you've created. You can filter security profiles by dimension or custom metric. Requires permission to access the ListSecurityProfiles action. dimensionName and metricName cannot be used in the same request.

```sql
SELECT
name,
arn
FROM aws.iot.security_profiles
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND dimensionName = '{{ dimensionName }}'
AND metricName = '{{ metricName }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_security_profile"
    values={[
        { label: 'create_security_profile', value: 'create_security_profile' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_security_profile">

Creates a Device Defender security profile. Requires permission to access the CreateSecurityProfile action.

```sql
INSERT INTO aws.iot.security_profiles (
securityProfileDescription,
behaviors,
alertTargets,
additionalMetricsToRetain,
additionalMetricsToRetainV2,
tags,
metricsExportConfig,
security_profile_name,
region
)
SELECT 
'{{ securityProfileDescription }}',
'{{ behaviors }}',
'{{ alertTargets }}',
'{{ additionalMetricsToRetain }}',
'{{ additionalMetricsToRetainV2 }}',
'{{ tags }}',
'{{ metricsExportConfig }}',
'{{ security_profile_name }}',
'{{ region }}'
RETURNING
security_profile_arn,
security_profile_name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: security_profiles
  props:
    - name: security_profile_name
      value: "{{ security_profile_name }}"
      description: Required parameter for the security_profiles resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the security_profiles resource.
    - name: securityProfileDescription
      value: "{{ securityProfileDescription }}"
    - name: behaviors
      value:
        - name: "{{ name }}"
          metric: "{{ metric }}"
          metricDimension:
            dimensionName: "{{ dimensionName }}"
            operator: "{{ operator }}"
          criteria:
            comparisonOperator: "{{ comparisonOperator }}"
            value:
              count: {{ count }}
              cidrs:
                - "{{ cidrs }}"
              ports:
                - {{ ports }}
              number: {{ number }}
              numbers:
                - {{ numbers }}
              strings:
                - "{{ strings }}"
            durationSeconds: {{ durationSeconds }}
            consecutiveDatapointsToAlarm: {{ consecutiveDatapointsToAlarm }}
            consecutiveDatapointsToClear: {{ consecutiveDatapointsToClear }}
            statisticalThreshold:
              statistic: "{{ statistic }}"
            mlDetectionConfig:
              confidenceLevel: "{{ confidenceLevel }}"
          suppressAlerts: {{ suppressAlerts }}
          exportMetric: {{ exportMetric }}
    - name: alertTargets
      value: "{{ alertTargets }}"
    - name: additionalMetricsToRetain
      value:
        - "{{ additionalMetricsToRetain }}"
    - name: additionalMetricsToRetainV2
      value:
        - metric: "{{ metric }}"
          metricDimension:
            dimensionName: "{{ dimensionName }}"
            operator: "{{ operator }}"
          exportMetric: {{ exportMetric }}
    - name: tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: metricsExportConfig
      description: |
        Set configurations for metrics export.
      value:
        mqttTopic: "{{ mqttTopic }}"
        roleArn: "{{ roleArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="attach_security_profile"
    values={[
        { label: 'attach_security_profile', value: 'attach_security_profile' },
        { label: 'update_security_profile', value: 'update_security_profile' }
    ]}
>
<TabItem value="attach_security_profile">

Associates a Device Defender security profile with a thing group or this account. Each thing group or account can have up to five security profiles associated with it. Requires permission to access the AttachSecurityProfile action.

```sql
UPDATE aws.iot.security_profiles
SET 
-- No updatable properties
WHERE 
security_profile_name = '{{ security_profile_name }}' --required
AND securityProfileTargetArn = '{{ securityProfileTargetArn }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="update_security_profile">

Updates a Device Defender security profile. Requires permission to access the UpdateSecurityProfile action.

```sql
UPDATE aws.iot.security_profiles
SET 
securityProfileDescription = '{{ securityProfileDescription }}',
behaviors = '{{ behaviors }}',
alertTargets = '{{ alertTargets }}',
additionalMetricsToRetain = '{{ additionalMetricsToRetain }}',
additionalMetricsToRetainV2 = '{{ additionalMetricsToRetainV2 }}',
deleteBehaviors = {{ deleteBehaviors }},
deleteAlertTargets = {{ deleteAlertTargets }},
deleteAdditionalMetricsToRetain = {{ deleteAdditionalMetricsToRetain }},
metricsExportConfig = '{{ metricsExportConfig }}',
deleteMetricsExportConfig = {{ deleteMetricsExportConfig }}
WHERE 
security_profile_name = '{{ security_profile_name }}' --required
AND region = '{{ region }}' --required
AND expectedVersion = '{{ expectedVersion}}'
RETURNING
additional_metrics_to_retain,
additional_metrics_to_retain_v2,
alert_targets,
behaviors,
creation_date,
last_modified_date,
metrics_export_config,
security_profile_arn,
security_profile_description,
security_profile_name,
version;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_security_profile"
    values={[
        { label: 'delete_security_profile', value: 'delete_security_profile' }
    ]}
>
<TabItem value="delete_security_profile">

Deletes a Device Defender security profile. Requires permission to access the DeleteSecurityProfile action.

```sql
DELETE FROM aws.iot.security_profiles
WHERE security_profile_name = '{{ security_profile_name }}' --required
AND region = '{{ region }}' --required
AND expectedVersion = '{{ expectedVersion }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="detach_security_profile"
    values={[
        { label: 'detach_security_profile', value: 'detach_security_profile' },
        { label: 'validate_security_profile_behaviors', value: 'validate_security_profile_behaviors' }
    ]}
>
<TabItem value="detach_security_profile">

Disassociates a Device Defender security profile from a thing group or from this account. Requires permission to access the DetachSecurityProfile action.

```sql
EXEC aws.iot.security_profiles.detach_security_profile 
@security_profile_name='{{ security_profile_name }}' --required, 
@securityProfileTargetArn='{{ securityProfileTargetArn }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="validate_security_profile_behaviors">

Validates a Device Defender security profile behaviors specification. Requires permission to access the ValidateSecurityProfileBehaviors action.

```sql
EXEC aws.iot.security_profiles.validate_security_profile_behaviors 
@region='{{ region }}' --required 
@@json=
'{
"behaviors": "{{ behaviors }}"
}'
;
```
</TabItem>
</Tabs>
