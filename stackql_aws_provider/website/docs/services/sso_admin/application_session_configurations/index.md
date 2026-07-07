--- 
title: application_session_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - application_session_configurations
  - sso_admin
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

Creates, updates, deletes, gets or lists an <code>application_session_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="application_session_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sso_admin.application_session_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_application_session_configuration"
    values={[
        { label: 'get_application_session_configuration', value: 'get_application_session_configuration' }
    ]}
>
<TabItem value="get_application_session_configuration">

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
    <td><CopyableCode code="UserBackgroundSessionApplicationStatus" /></td>
    <td><code>string</code></td>
    <td>The status of user background sessions for the application. (ENABLED, DISABLED)</td>
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
    <td><a href="#get_application_session_configuration"><CopyableCode code="get_application_session_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the session configuration for an application in IAM Identity Center. The session configuration determines how users can access an application. This includes whether user background sessions are enabled. User background sessions allow users to start a job on a supported Amazon Web Services managed application without having to remain signed in to an active session while the job runs.</td>
</tr>
<tr>
    <td><a href="#put_application_session_configuration"><CopyableCode code="put_application_session_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApplicationArn"><code>ApplicationArn</code></a></td>
    <td></td>
    <td>Updates the session configuration for an application in IAM Identity Center. The session configuration determines how users can access an application. This includes whether user background sessions are enabled. User background sessions allow users to start a job on a supported Amazon Web Services managed application without having to remain signed in to an active session while the job runs.</td>
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
    defaultValue="get_application_session_configuration"
    values={[
        { label: 'get_application_session_configuration', value: 'get_application_session_configuration' }
    ]}
>
<TabItem value="get_application_session_configuration">

Retrieves the session configuration for an application in IAM Identity Center. The session configuration determines how users can access an application. This includes whether user background sessions are enabled. User background sessions allow users to start a job on a supported Amazon Web Services managed application without having to remain signed in to an active session while the job runs.

```sql
SELECT
UserBackgroundSessionApplicationStatus
FROM aws.sso_admin.application_session_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_application_session_configuration"
    values={[
        { label: 'put_application_session_configuration', value: 'put_application_session_configuration' }
    ]}
>
<TabItem value="put_application_session_configuration">

Updates the session configuration for an application in IAM Identity Center. The session configuration determines how users can access an application. This includes whether user background sessions are enabled. User background sessions allow users to start a job on a supported Amazon Web Services managed application without having to remain signed in to an active session while the job runs.

```sql
REPLACE aws.sso_admin.application_session_configurations
SET 
ApplicationArn = '{{ ApplicationArn }}',
UserBackgroundSessionApplicationStatus = '{{ UserBackgroundSessionApplicationStatus }}'
WHERE 
region = '{{ region }}' --required
AND ApplicationArn = '{{ ApplicationArn }}' --required;
```
</TabItem>
</Tabs>
