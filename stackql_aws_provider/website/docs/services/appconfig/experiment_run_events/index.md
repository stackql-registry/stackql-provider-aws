--- 
title: experiment_run_events
hide_title: false
hide_table_of_contents: false
keywords:
  - experiment_run_events
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

Creates, updates, deletes, gets or lists an <code>experiment_run_events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="experiment_run_events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appconfig.experiment_run_events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_experiment_run_events"
    values={[
        { label: 'list_experiment_run_events', value: 'list_experiment_run_events' }
    ]}
>
<TabItem value="list_experiment_run_events">

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
    <td><CopyableCode code="associated_deployment" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the deployment associated with this event. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:&#91;a-z&#93;+:((eusc-)?&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;)?:(\d&#123;12&#125;)?:&#91;a-zA-Z0-9-_/:.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the event.</td>
</tr>
<tr>
    <td><CopyableCode code="event_type" /></td>
    <td><code>string</code></td>
    <td>The type of event. Valid values: RUN_STARTED, EXPOSURE_UPDATED, OVERRIDES_UPDATED, RUN_STOPPED. (RUN_STARTED, EXPOSURE_UPDATED, OVERRIDES_UPDATED, RUN_STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="exposure_percentage" /></td>
    <td><code>number (float)</code></td>
    <td>The exposure percentage at the time of the event.</td>
</tr>
<tr>
    <td><CopyableCode code="occurred_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the event occurred, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="treatment_overrides" /></td>
    <td><code>object</code></td>
    <td>The treatment overrides at the time of the event.</td>
</tr>
<tr>
    <td><CopyableCode code="triggered_by" /></td>
    <td><code>string</code></td>
    <td>The principal that triggered the event. (USER, APPCONFIG, CLOUDWATCH_ALARM, INTERNAL_ERROR)</td>
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
    <td><a href="#list_experiment_run_events"><CopyableCode code="list_experiment_run_events" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_identifier"><code>application_identifier</code></a>, <a href="#parameter-experiment_definition_identifier"><code>experiment_definition_identifier</code></a>, <a href="#parameter-run"><code>run</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max_results"><code>max_results</code></a>, <a href="#parameter-next_token"><code>next_token</code></a></td>
    <td>Lists the events for a specified experiment run. Events provide a timeline of actions and state changes that occurred during the run.</td>
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
    <td>The run number.</td>
</tr>
<tr id="parameter-max_results">
    <td><CopyableCode code="max_results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return.</td>
</tr>
<tr id="parameter-next_token">
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A token to start the list from a previously truncated response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_experiment_run_events"
    values={[
        { label: 'list_experiment_run_events', value: 'list_experiment_run_events' }
    ]}
>
<TabItem value="list_experiment_run_events">

Lists the events for a specified experiment run. Events provide a timeline of actions and state changes that occurred during the run.

```sql
SELECT
associated_deployment,
description,
event_type,
exposure_percentage,
occurred_at,
treatment_overrides,
triggered_by
FROM aws.appconfig.experiment_run_events
WHERE application_identifier = '{{ application_identifier }}' -- required
AND experiment_definition_identifier = '{{ experiment_definition_identifier }}' -- required
AND run = '{{ run }}' -- required
AND region = '{{ region }}' -- required
AND max_results = '{{ max_results }}'
AND next_token = '{{ next_token }}'
;
```
</TabItem>
</Tabs>
