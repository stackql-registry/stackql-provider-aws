--- 
title: session_loggers
hide_title: false
hide_table_of_contents: false
keywords:
  - session_loggers
  - workspaces_web
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

Creates, updates, deletes, gets or lists a <code>session_loggers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="session_loggers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workspaces_web.session_loggers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_session_logger"
    values={[
        { label: 'get_session_logger', value: 'get_session_logger' },
        { label: 'list_session_loggers', value: 'list_session_loggers' }
    ]}
>
<TabItem value="get_session_logger">

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
    <td><CopyableCode code="additional_encryption_context" /></td>
    <td><code>object</code></td>
    <td>The additional encryption context of the session logger.</td>
</tr>
<tr>
    <td><CopyableCode code="associated_portal_arns" /></td>
    <td><code>array</code></td>
    <td>The associated portal ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the session logger resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customer_managed_key" /></td>
    <td><code>string</code></td>
    <td>The custom managed key of the session logger. (pattern: &lt;code&gt;arn:&#91;\w+=\/,.@-&#93;+:kms:&#91;a-zA-Z0-9\-&#93;*:&#91;a-zA-Z0-9&#93;&#123;1,12&#125;:key\/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The human-readable display name. (pattern: &lt;code&gt;&#91; _\-\d\w&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="event_filter" /></td>
    <td><code>object</code></td>
    <td>The filter that specifies the events to monitor.</td>
</tr>
<tr>
    <td><CopyableCode code="log_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration of the log.</td>
</tr>
<tr>
    <td><CopyableCode code="session_logger_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the session logger resource. (pattern: &lt;code&gt;arn:&#91;\w+=\/,.@-&#93;+:&#91;a-zA-Z0-9\-&#93;+:&#91;a-zA-Z0-9\-&#93;*:&#91;a-zA-Z0-9&#93;&#123;1,12&#125;:&#91;a-zA-Z&#93;+(\/&#91;a-fA-F0-9\-&#93;&#123;36&#125;)+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_session_loggers">

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
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the session logger resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The human-readable display name. (pattern: &lt;code&gt;&#91; _\-\d\w&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="log_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration of the log.</td>
</tr>
<tr>
    <td><CopyableCode code="session_logger_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the session logger resource. (pattern: &lt;code&gt;arn:&#91;\w+=\/,.@-&#93;+:&#91;a-zA-Z0-9\-&#93;+:&#91;a-zA-Z0-9\-&#93;*:&#91;a-zA-Z0-9&#93;&#123;1,12&#125;:&#91;a-zA-Z&#93;+(\/&#91;a-fA-F0-9\-&#93;&#123;36&#125;)+&lt;/code&gt;)</td>
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
    <td><a href="#get_session_logger"><CopyableCode code="get_session_logger" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-session_logger_arn"><code>session_logger_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets details about a specific session logger resource.</td>
</tr>
<tr>
    <td><a href="#list_session_loggers"><CopyableCode code="list_session_loggers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists all available session logger resources.</td>
</tr>
<tr>
    <td><a href="#create_session_logger"><CopyableCode code="create_session_logger" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-eventFilter"><code>eventFilter</code></a>, <a href="#parameter-logConfiguration"><code>logConfiguration</code></a></td>
    <td></td>
    <td>Creates a session logger.</td>
</tr>
<tr>
    <td><a href="#associate_session_logger"><CopyableCode code="associate_session_logger" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-portal_arn"><code>portal_arn</code></a>, <a href="#parameter-sessionLoggerArn"><code>sessionLoggerArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Associates a session logger with a portal.</td>
</tr>
<tr>
    <td><a href="#disassociate_session_logger"><CopyableCode code="disassociate_session_logger" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-portal_arn"><code>portal_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates a session logger from a portal.</td>
</tr>
<tr>
    <td><a href="#update_session_logger"><CopyableCode code="update_session_logger" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-session_logger_arn"><code>session_logger_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the details of a session logger.</td>
</tr>
<tr>
    <td><a href="#delete_session_logger"><CopyableCode code="delete_session_logger" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-session_logger_arn"><code>session_logger_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a session logger resource.</td>
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
<tr id="parameter-portal_arn">
    <td><CopyableCode code="portal_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the portal to disassociate from the a session logger.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-sessionLoggerArn">
    <td><CopyableCode code="sessionLoggerArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the session logger to associate to the portal ARN.</td>
</tr>
<tr id="parameter-session_logger_arn">
    <td><CopyableCode code="session_logger_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the session logger.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be included in the next page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token used to retrieve the next page of results for this operation.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_session_logger"
    values={[
        { label: 'get_session_logger', value: 'get_session_logger' },
        { label: 'list_session_loggers', value: 'list_session_loggers' }
    ]}
>
<TabItem value="get_session_logger">

Gets details about a specific session logger resource.

```sql
SELECT
additional_encryption_context,
associated_portal_arns,
creation_date,
customer_managed_key,
display_name,
event_filter,
log_configuration,
session_logger_arn
FROM aws.workspaces_web.session_loggers
WHERE session_logger_arn = '{{ session_logger_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_session_loggers">

Lists all available session logger resources.

```sql
SELECT
creation_date,
display_name,
log_configuration,
session_logger_arn
FROM aws.workspaces_web.session_loggers
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_session_logger"
    values={[
        { label: 'create_session_logger', value: 'create_session_logger' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_session_logger">

Creates a session logger.

```sql
INSERT INTO aws.workspaces_web.session_loggers (
eventFilter,
logConfiguration,
displayName,
customerManagedKey,
additionalEncryptionContext,
tags,
clientToken,
region
)
SELECT 
'{{ eventFilter }}' /* required */,
'{{ logConfiguration }}' /* required */,
'{{ displayName }}',
'{{ customerManagedKey }}',
'{{ additionalEncryptionContext }}',
'{{ tags }}',
'{{ clientToken }}',
'{{ region }}'
RETURNING
session_logger_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: session_loggers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the session_loggers resource.
    - name: eventFilter
      description: |
        The filter that specifies the events to monitor.
      value:
        all: "{{ all }}"
        include:
          - "{{ include }}"
    - name: logConfiguration
      description: |
        The configuration of the log.
      value:
        s3:
          bucket: "{{ bucket }}"
          keyPrefix: "{{ keyPrefix }}"
          bucketOwner: "{{ bucketOwner }}"
          logFileFormat: "{{ logFileFormat }}"
          folderStructure: "{{ folderStructure }}"
    - name: displayName
      value: "{{ displayName }}"
    - name: customerManagedKey
      value: "{{ customerManagedKey }}"
    - name: additionalEncryptionContext
      value: "{{ additionalEncryptionContext }}"
    - name: tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_session_logger"
    values={[
        { label: 'associate_session_logger', value: 'associate_session_logger' },
        { label: 'disassociate_session_logger', value: 'disassociate_session_logger' },
        { label: 'update_session_logger', value: 'update_session_logger' }
    ]}
>
<TabItem value="associate_session_logger">

Associates a session logger with a portal.

```sql
UPDATE aws.workspaces_web.session_loggers
SET 
-- No updatable properties
WHERE 
portal_arn = '{{ portal_arn }}' --required
AND sessionLoggerArn = '{{ sessionLoggerArn }}' --required
AND region = '{{ region }}' --required
RETURNING
portal_arn,
session_logger_arn;
```
</TabItem>
<TabItem value="disassociate_session_logger">

Disassociates a session logger from a portal.

```sql
UPDATE aws.workspaces_web.session_loggers
SET 
-- No updatable properties
WHERE 
portal_arn = '{{ portal_arn }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="update_session_logger">

Updates the details of a session logger.

```sql
UPDATE aws.workspaces_web.session_loggers
SET 
eventFilter = '{{ eventFilter }}',
logConfiguration = '{{ logConfiguration }}',
displayName = '{{ displayName }}'
WHERE 
session_logger_arn = '{{ session_logger_arn }}' --required
AND region = '{{ region }}' --required
RETURNING
session_logger;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_session_logger"
    values={[
        { label: 'delete_session_logger', value: 'delete_session_logger' }
    ]}
>
<TabItem value="delete_session_logger">

Deletes a session logger resource.

```sql
DELETE FROM aws.workspaces_web.session_loggers
WHERE session_logger_arn = '{{ session_logger_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
