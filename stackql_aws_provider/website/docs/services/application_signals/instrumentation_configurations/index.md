--- 
title: instrumentation_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - instrumentation_configurations
  - application_signals
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

Creates, updates, deletes, gets or lists an <code>instrumentation_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instrumentation_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.application_signals.instrumentation_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_instrumentation_configuration"
    values={[
        { label: 'get_instrumentation_configuration', value: 'get_instrumentation_configuration' },
        { label: 'list_instrumentation_configurations', value: 'list_instrumentation_configurations' }
    ]}
>
<TabItem value="get_instrumentation_configuration">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>ARN for the instrumentation configuration (pattern: &lt;code&gt;arn:&#91;^:&#93;+:application-signals:&#91;^:&#93;+:&#91;0-9&#93;&#123;12&#125;:instrumentationConfig/.+/&#91;0-9a-f&#93;&#123;16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="attribute_filters" /></td>
    <td><code>array</code></td>
    <td>An array of attribute filter groups used to target specific instances. Each filter group must match all of its keys (AND), and multiple groups are OR-matched to decide whether an instance applies the instrumentation. Filters are evaluated client-side by the SDK.</td>
</tr>
<tr>
    <td><CopyableCode code="capture_configuration" /></td>
    <td><code>object</code></td>
    <td>A union that defines what data to capture when the instrumentation point is hit. Specify CodeCapture for code-level capture settings.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this instrumentation configuration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional short description of the instrumentation configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>string</code></td>
    <td>The environment where the service is running.</td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this configuration expires.</td>
</tr>
<tr>
    <td><CopyableCode code="instrumentation_type" /></td>
    <td><code>string</code></td>
    <td>Type of instrumentation configuration (BREAKPOINT, PROBE)</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>object</code></td>
    <td>A union that identifies the location to instrument. Specify a CodeLocation for code-level instrumentation.</td>
</tr>
<tr>
    <td><CopyableCode code="location_hash" /></td>
    <td><code>string</code></td>
    <td>The stable hash derived from the location that uniquely identifies this instrumentation point within the service and environment.</td>
</tr>
<tr>
    <td><CopyableCode code="service" /></td>
    <td><code>string</code></td>
    <td>The service that this instrumentation configuration targets.</td>
</tr>
<tr>
    <td><CopyableCode code="signal_type" /></td>
    <td><code>string</code></td>
    <td>The telemetry signal type for instrumentation. SNAPSHOT - Captures a snapshot of the instrumentation point. (SNAPSHOT)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_instrumentation_configurations">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>ARN for the instrumentation configuration (pattern: &lt;code&gt;arn:&#91;^:&#93;+:application-signals:&#91;^:&#93;+:&#91;0-9&#93;&#123;12&#125;:instrumentationConfig/.+/&#91;0-9a-f&#93;&#123;16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="attribute_filters" /></td>
    <td><code>array</code></td>
    <td>An array of attribute filter groups used to target specific instances. Each filter group must match all of its keys (AND), and multiple groups are OR-matched to decide whether an instance applies the instrumentation. Filters are evaluated client-side by the SDK.</td>
</tr>
<tr>
    <td><CopyableCode code="capture_configuration" /></td>
    <td><code>object</code></td>
    <td>A union that defines what data to capture when the instrumentation point is hit. Specify CodeCapture for code-level capture settings.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this instrumentation configuration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional short description of the instrumentation configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this configuration expires.</td>
</tr>
<tr>
    <td><CopyableCode code="instrumentation_type" /></td>
    <td><code>string</code></td>
    <td>Type of instrumentation configuration (BREAKPOINT, PROBE)</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>object</code></td>
    <td>A union that identifies the location to instrument. Specify a CodeLocation for code-level instrumentation.</td>
</tr>
<tr>
    <td><CopyableCode code="location_hash" /></td>
    <td><code>string</code></td>
    <td>The stable hash derived from the location that identifies this instrumentation point.</td>
</tr>
<tr>
    <td><CopyableCode code="signal_type" /></td>
    <td><code>string</code></td>
    <td>The telemetry signal type for instrumentation. SNAPSHOT - Captures a snapshot of the instrumentation point. (SNAPSHOT)</td>
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
    <td><a href="#get_instrumentation_configuration"><CopyableCode code="get_instrumentation_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the details of a single instrumentation configuration identified by service, environment, signal type, and location. Use this to audit or display configuration details.</td>
</tr>
<tr>
    <td><a href="#list_instrumentation_configurations"><CopyableCode code="list_instrumentation_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns all active instrumentation configurations for a service and environment. SDKs use this operation to sync configurations and apply client-side filters locally. Include the previous SyncedAt value to perform incremental syncs. When no changes are detected, the response sets Changed to false and omits configuration details.</td>
</tr>
<tr>
    <td><a href="#create_instrumentation_configuration"><CopyableCode code="create_instrumentation_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstrumentationType"><code>InstrumentationType</code></a>, <a href="#parameter-SignalType"><code>SignalType</code></a>, <a href="#parameter-CaptureConfiguration"><code>CaptureConfiguration</code></a></td>
    <td></td>
    <td>Creates a dynamic instrumentation configuration for a specific code or endpoint location within a service and environment. Configurations are immutable after creation. For BREAKPOINT type configurations, they expire after 24 hours unless a shorter expiration is provided. For PROBE type configurations, they persist until explicitly deleted; an expiration cannot be set for PROBE configurations. If a configuration already exists for the same service, environment, signal type, and location, this operation returns a conflict instead of overwriting it. Use attribute filters and capture settings to control where the instrumentation runs and which data is collected.</td>
</tr>
<tr>
    <td><a href="#delete_instrumentation_configuration"><CopyableCode code="delete_instrumentation_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified instrumentation configuration. SDKs remove the instrumentation during their next sync after the configuration is deleted or expires.</td>
</tr>
<tr>
    <td><a href="#batch_delete_instrumentation_configurations"><CopyableCode code="batch_delete_instrumentation_configurations" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DeletionTarget"><code>DeletionTarget</code></a></td>
    <td></td>
    <td>Deletes multiple instrumentation configurations in a single request. Supports two mutually exclusive selection methods: By scope: Delete all configurations matching a Service + Environment + InstrumentationType By ARN list: Delete specific configurations by providing a list of resource ARNs</td>
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
    defaultValue="get_instrumentation_configuration"
    values={[
        { label: 'get_instrumentation_configuration', value: 'get_instrumentation_configuration' },
        { label: 'list_instrumentation_configurations', value: 'list_instrumentation_configurations' }
    ]}
>
<TabItem value="get_instrumentation_configuration">

Returns the details of a single instrumentation configuration identified by service, environment, signal type, and location. Use this to audit or display configuration details.

```sql
SELECT
arn,
attribute_filters,
capture_configuration,
created_at,
description,
environment,
expires_at,
instrumentation_type,
location,
location_hash,
service,
signal_type
FROM aws.application_signals.instrumentation_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_instrumentation_configurations">

Returns all active instrumentation configurations for a service and environment. SDKs use this operation to sync configurations and apply client-side filters locally. Include the previous SyncedAt value to perform incremental syncs. When no changes are detected, the response sets Changed to false and omits configuration details.

```sql
SELECT
arn,
attribute_filters,
capture_configuration,
created_at,
description,
expires_at,
instrumentation_type,
location,
location_hash,
signal_type
FROM aws.application_signals.instrumentation_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_instrumentation_configuration"
    values={[
        { label: 'create_instrumentation_configuration', value: 'create_instrumentation_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_instrumentation_configuration">

Creates a dynamic instrumentation configuration for a specific code or endpoint location within a service and environment. Configurations are immutable after creation. For BREAKPOINT type configurations, they expire after 24 hours unless a shorter expiration is provided. For PROBE type configurations, they persist until explicitly deleted; an expiration cannot be set for PROBE configurations. If a configuration already exists for the same service, environment, signal type, and location, this operation returns a conflict instead of overwriting it. Use attribute filters and capture settings to control where the instrumentation runs and which data is collected.

```sql
INSERT INTO aws.application_signals.instrumentation_configurations (
InstrumentationType,
Service,
Environment,
SignalType,
Location,
Description,
ExpiresAt,
AttributeFilters,
CaptureConfiguration,
Tags,
region
)
SELECT 
'{{ InstrumentationType }}' /* required */,
'{{ Service }}',
'{{ Environment }}',
'{{ SignalType }}' /* required */,
'{{ Location }}',
'{{ Description }}',
'{{ ExpiresAt }}',
'{{ AttributeFilters }}',
'{{ CaptureConfiguration }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
arn,
attribute_filters,
capture_configuration,
created_at,
description,
environment,
expires_at,
instrumentation_type,
location,
location_hash,
service,
signal_type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: instrumentation_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the instrumentation_configurations resource.
    - name: InstrumentationType
      value: "{{ InstrumentationType }}"
      description: |
        Type of instrumentation configuration
      valid_values: ['BREAKPOINT', 'PROBE']
    - name: Service
      value: "{{ Service }}"
    - name: Environment
      value: "{{ Environment }}"
    - name: SignalType
      value: "{{ SignalType }}"
      description: |
        The telemetry signal type for instrumentation. SNAPSHOT - Captures a snapshot of the instrumentation point.
      valid_values: ['SNAPSHOT']
    - name: Location
      description: |
        A union that identifies the location to instrument. Specify a CodeLocation for code-level instrumentation.
      value:
        CodeLocation:
          Language: "{{ Language }}"
          CodeUnit: "{{ CodeUnit }}"
          ClassName: "{{ ClassName }}"
          MethodName: "{{ MethodName }}"
          FilePath: "{{ FilePath }}"
          LineNumber: {{ LineNumber }}
    - name: Description
      value: "{{ Description }}"
    - name: ExpiresAt
      value: "{{ ExpiresAt }}"
    - name: AttributeFilters
      value: "{{ AttributeFilters }}"
      description: |
        An array of attribute filter groups used to target specific instances. Each filter group must match all of its keys (AND), and multiple groups are OR-matched to decide whether an instance applies the instrumentation. Filters are evaluated client-side by the SDK.
    - name: CaptureConfiguration
      description: |
        A union that defines what data to capture when the instrumentation point is hit. Specify CodeCapture for code-level capture settings.
      value:
        CodeCapture:
          CaptureArguments:
            - "{{ CaptureArguments }}"
          CaptureReturn: {{ CaptureReturn }}
          CaptureStackTrace: {{ CaptureStackTrace }}
          CaptureLocals:
            - "{{ CaptureLocals }}"
          CaptureLimits:
            MaxHits: {{ MaxHits }}
            MaxStringLength: {{ MaxStringLength }}
            MaxCollectionWidth: {{ MaxCollectionWidth }}
            MaxCollectionDepth: {{ MaxCollectionDepth }}
            MaxStackFrames: {{ MaxStackFrames }}
            MaxStackTraceSize: {{ MaxStackTraceSize }}
            MaxObjectDepth: {{ MaxObjectDepth }}
            MaxFieldsPerObject: {{ MaxFieldsPerObject }}
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_instrumentation_configuration"
    values={[
        { label: 'delete_instrumentation_configuration', value: 'delete_instrumentation_configuration' }
    ]}
>
<TabItem value="delete_instrumentation_configuration">

Deletes the specified instrumentation configuration. SDKs remove the instrumentation during their next sync after the configuration is deleted or expires.

```sql
DELETE FROM aws.application_signals.instrumentation_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_delete_instrumentation_configurations"
    values={[
        { label: 'batch_delete_instrumentation_configurations', value: 'batch_delete_instrumentation_configurations' }
    ]}
>
<TabItem value="batch_delete_instrumentation_configurations">

Deletes multiple instrumentation configurations in a single request. Supports two mutually exclusive selection methods: By scope: Delete all configurations matching a Service + Environment + InstrumentationType By ARN list: Delete specific configurations by providing a list of resource ARNs

```sql
EXEC aws.application_signals.instrumentation_configurations.batch_delete_instrumentation_configurations 
@region='{{ region }}' --required 
@@json=
'{
"DeletionTarget": "{{ DeletionTarget }}"
}'
;
```
</TabItem>
</Tabs>
