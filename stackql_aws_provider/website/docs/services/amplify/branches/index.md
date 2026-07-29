--- 
title: branches
hide_title: false
hide_table_of_contents: false
keywords:
  - branches
  - amplify
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

Creates, updates, deletes, gets or lists a <code>branches</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="branches" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.amplify.branches" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_branch"
    values={[
        { label: 'get_branch', value: 'get_branch' },
        { label: 'list_branches', value: 'list_branches' }
    ]}
>
<TabItem value="get_branch">

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
    <td><CopyableCode code="active_job_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the active job for a branch of an Amplify app.</td>
</tr>
<tr>
    <td><CopyableCode code="associated_resources" /></td>
    <td><code>array</code></td>
    <td>A list of custom resources that are linked to this branch.</td>
</tr>
<tr>
    <td><CopyableCode code="backend" /></td>
    <td><code>object</code></td>
    <td>Describes the backend associated with an Amplify Branch. This property is available to Amplify Gen 2 apps only. When you deploy an application with Amplify Gen 2, you provision the app's backend infrastructure using Typescript code.</td>
</tr>
<tr>
    <td><CopyableCode code="backend_environment_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for a backend environment that is part of an Amplify app. This property is available to Amplify Gen 1 apps only. When you deploy an application with Amplify Gen 2, you provision the app's backend infrastructure using Typescript code. (pattern: &lt;code&gt;(?s).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="basic_auth_credentials" /></td>
    <td><code>string</code></td>
    <td>The basic authorization credentials for a branch of an Amplify app. You must base64-encode the authorization credentials and provide them in the format user:password. (pattern: &lt;code&gt;(?s).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="branch_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for a branch that is part of an Amplify app. (pattern: &lt;code&gt;(?s).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="branch_name" /></td>
    <td><code>string</code></td>
    <td>The name for the branch that is part of an Amplify app. (pattern: &lt;code&gt;(?s).+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="build_spec" /></td>
    <td><code>string</code></td>
    <td>The build specification (build spec) file for an Amplify app build. (pattern: &lt;code&gt;(?s).+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="compute_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role for a branch of an SSR app. The Compute role allows the Amplify Hosting compute service to securely access specific Amazon Web Services resources based on the role's permissions. For more information about the SSR Compute role, see Adding an SSR Compute role in the Amplify User Guide. (pattern: &lt;code&gt;(?s).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp of when Amplify created the branch.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_domains" /></td>
    <td><code>array</code></td>
    <td>The custom domains for a branch of an Amplify app.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description for the branch that is part of an Amplify app. (pattern: &lt;code&gt;(?s).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="destination_branch" /></td>
    <td><code>string</code></td>
    <td>The destination branch if the branch is a pull request branch. (pattern: &lt;code&gt;(?s).+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The display name for the branch. This is used as the default domain prefix. (pattern: &lt;code&gt;(?s).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="enable_auto_build" /></td>
    <td><code>boolean</code></td>
    <td>Enables auto-building on push for a branch of an Amplify app.</td>
</tr>
<tr>
    <td><CopyableCode code="enable_basic_auth" /></td>
    <td><code>boolean</code></td>
    <td>Enables basic authorization for a branch of an Amplify app.</td>
</tr>
<tr>
    <td><CopyableCode code="enable_notification" /></td>
    <td><code>boolean</code></td>
    <td>Enables notifications for a branch that is part of an Amplify app.</td>
</tr>
<tr>
    <td><CopyableCode code="enable_performance_mode" /></td>
    <td><code>boolean</code></td>
    <td>Enables performance mode for the branch. Performance mode optimizes for faster hosting performance by keeping content cached at the edge for a longer interval. When performance mode is enabled, hosting configuration or code changes can take up to 10 minutes to roll out.</td>
</tr>
<tr>
    <td><CopyableCode code="enable_pull_request_preview" /></td>
    <td><code>boolean</code></td>
    <td>Enables pull request previews for the branch.</td>
</tr>
<tr>
    <td><CopyableCode code="enable_skew_protection" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the skew protection feature is enabled for the branch. Deployment skew protection is available to Amplify applications to eliminate version skew issues between client and servers in web applications. When you apply skew protection to a branch, you can ensure that your clients always interact with the correct version of server-side assets, regardless of when a deployment occurs. For more information about skew protection, see Skew protection for Amplify deployments in the Amplify User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="environment_variables" /></td>
    <td><code>object</code></td>
    <td>The environment variables specific to a branch of an Amplify app.</td>
</tr>
<tr>
    <td><CopyableCode code="framework" /></td>
    <td><code>string</code></td>
    <td>The framework for a branch of an Amplify app. (pattern: &lt;code&gt;(?s).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pull_request_environment_name" /></td>
    <td><code>string</code></td>
    <td>The Amplify environment name for the pull request. (pattern: &lt;code&gt;(?s).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source_branch" /></td>
    <td><code>string</code></td>
    <td>The source branch if the branch is a pull request branch. (pattern: &lt;code&gt;(?s).+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="stage" /></td>
    <td><code>string</code></td>
    <td>The current stage for the branch that is part of an Amplify app. (PRODUCTION, BETA, DEVELOPMENT, EXPERIMENTAL, PULL_REQUEST)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tag for the branch of an Amplify app.</td>
</tr>
<tr>
    <td><CopyableCode code="thumbnail_url" /></td>
    <td><code>string</code></td>
    <td>The thumbnail URL for the branch of an Amplify app.</td>
</tr>
<tr>
    <td><CopyableCode code="total_number_of_jobs" /></td>
    <td><code>string</code></td>
    <td>The total number of jobs that are part of an Amplify app.</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>string</code></td>
    <td>The content Time to Live (TTL) for the website in seconds. (pattern: &lt;code&gt;\d*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp for the last updated time for a branch.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_branches">

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
    <td><CopyableCode code="active_job_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the active job for a branch of an Amplify app.</td>
</tr>
<tr>
    <td><CopyableCode code="associated_resources" /></td>
    <td><code>array</code></td>
    <td>A list of custom resources that are linked to this branch.</td>
</tr>
<tr>
    <td><CopyableCode code="backend" /></td>
    <td><code>object</code></td>
    <td>Describes the backend associated with an Amplify Branch. This property is available to Amplify Gen 2 apps only. When you deploy an application with Amplify Gen 2, you provision the app's backend infrastructure using Typescript code.</td>
</tr>
<tr>
    <td><CopyableCode code="backend_environment_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for a backend environment that is part of an Amplify app. This property is available to Amplify Gen 1 apps only. When you deploy an application with Amplify Gen 2, you provision the app's backend infrastructure using Typescript code. (pattern: &lt;code&gt;(?s).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="basic_auth_credentials" /></td>
    <td><code>string</code></td>
    <td>The basic authorization credentials for a branch of an Amplify app. You must base64-encode the authorization credentials and provide them in the format user:password. (pattern: &lt;code&gt;(?s).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="branch_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for a branch that is part of an Amplify app. (pattern: &lt;code&gt;(?s).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="branch_name" /></td>
    <td><code>string</code></td>
    <td>The name for the branch that is part of an Amplify app. (pattern: &lt;code&gt;(?s).+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="build_spec" /></td>
    <td><code>string</code></td>
    <td>The build specification (build spec) file for an Amplify app build. (pattern: &lt;code&gt;(?s).+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="compute_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role for a branch of an SSR app. The Compute role allows the Amplify Hosting compute service to securely access specific Amazon Web Services resources based on the role's permissions. For more information about the SSR Compute role, see Adding an SSR Compute role in the Amplify User Guide. (pattern: &lt;code&gt;(?s).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp of when Amplify created the branch.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_domains" /></td>
    <td><code>array</code></td>
    <td>The custom domains for a branch of an Amplify app.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description for the branch that is part of an Amplify app. (pattern: &lt;code&gt;(?s).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="destination_branch" /></td>
    <td><code>string</code></td>
    <td>The destination branch if the branch is a pull request branch. (pattern: &lt;code&gt;(?s).+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The display name for the branch. This is used as the default domain prefix. (pattern: &lt;code&gt;(?s).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="enable_auto_build" /></td>
    <td><code>boolean</code></td>
    <td>Enables auto-building on push for a branch of an Amplify app.</td>
</tr>
<tr>
    <td><CopyableCode code="enable_basic_auth" /></td>
    <td><code>boolean</code></td>
    <td>Enables basic authorization for a branch of an Amplify app.</td>
</tr>
<tr>
    <td><CopyableCode code="enable_notification" /></td>
    <td><code>boolean</code></td>
    <td>Enables notifications for a branch that is part of an Amplify app.</td>
</tr>
<tr>
    <td><CopyableCode code="enable_performance_mode" /></td>
    <td><code>boolean</code></td>
    <td>Enables performance mode for the branch. Performance mode optimizes for faster hosting performance by keeping content cached at the edge for a longer interval. When performance mode is enabled, hosting configuration or code changes can take up to 10 minutes to roll out.</td>
</tr>
<tr>
    <td><CopyableCode code="enable_pull_request_preview" /></td>
    <td><code>boolean</code></td>
    <td>Enables pull request previews for the branch.</td>
</tr>
<tr>
    <td><CopyableCode code="enable_skew_protection" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the skew protection feature is enabled for the branch. Deployment skew protection is available to Amplify applications to eliminate version skew issues between client and servers in web applications. When you apply skew protection to a branch, you can ensure that your clients always interact with the correct version of server-side assets, regardless of when a deployment occurs. For more information about skew protection, see Skew protection for Amplify deployments in the Amplify User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="environment_variables" /></td>
    <td><code>object</code></td>
    <td>The environment variables specific to a branch of an Amplify app.</td>
</tr>
<tr>
    <td><CopyableCode code="framework" /></td>
    <td><code>string</code></td>
    <td>The framework for a branch of an Amplify app. (pattern: &lt;code&gt;(?s).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pull_request_environment_name" /></td>
    <td><code>string</code></td>
    <td>The Amplify environment name for the pull request. (pattern: &lt;code&gt;(?s).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source_branch" /></td>
    <td><code>string</code></td>
    <td>The source branch if the branch is a pull request branch. (pattern: &lt;code&gt;(?s).+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="stage" /></td>
    <td><code>string</code></td>
    <td>The current stage for the branch that is part of an Amplify app. (PRODUCTION, BETA, DEVELOPMENT, EXPERIMENTAL, PULL_REQUEST)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tag for the branch of an Amplify app.</td>
</tr>
<tr>
    <td><CopyableCode code="thumbnail_url" /></td>
    <td><code>string</code></td>
    <td>The thumbnail URL for the branch of an Amplify app.</td>
</tr>
<tr>
    <td><CopyableCode code="total_number_of_jobs" /></td>
    <td><code>string</code></td>
    <td>The total number of jobs that are part of an Amplify app.</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>string</code></td>
    <td>The content Time to Live (TTL) for the website in seconds. (pattern: &lt;code&gt;\d*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp for the last updated time for a branch.</td>
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
    <td><a href="#get_branch"><CopyableCode code="get_branch" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-branch_name"><code>branch_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a branch for an Amplify app.</td>
</tr>
<tr>
    <td><a href="#list_branches"><CopyableCode code="list_branches" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the branches of an Amplify app.</td>
</tr>
<tr>
    <td><a href="#create_branch"><CopyableCode code="create_branch" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-branchName"><code>branchName</code></a></td>
    <td></td>
    <td>Creates a new branch for an Amplify app.</td>
</tr>
<tr>
    <td><a href="#create_deployment"><CopyableCode code="create_deployment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-branch_name"><code>branch_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a deployment for a manually deployed Amplify app. Manually deployed apps are not connected to a Git repository. The maximum duration between the CreateDeployment call and the StartDeployment call cannot exceed 8 hours. If the duration exceeds 8 hours, the StartDeployment call and the associated Job will fail.</td>
</tr>
<tr>
    <td><a href="#update_branch"><CopyableCode code="update_branch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-branch_name"><code>branch_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a branch for an Amplify app.</td>
</tr>
<tr>
    <td><a href="#delete_branch"><CopyableCode code="delete_branch" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-branch_name"><code>branch_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a branch for an Amplify app.</td>
</tr>
<tr>
    <td><a href="#start_job"><CopyableCode code="start_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-branch_name"><code>branch_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-jobType"><code>jobType</code></a></td>
    <td></td>
    <td>Starts a new job for a branch of an Amplify app.</td>
</tr>
<tr>
    <td><a href="#start_deployment"><CopyableCode code="start_deployment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-branch_name"><code>branch_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Starts a deployment for a manually deployed app. Manually deployed apps are not connected to a Git repository. The maximum duration between the CreateDeployment call and the StartDeployment call cannot exceed 8 hours. If the duration exceeds 8 hours, the StartDeployment call and the associated Job will fail.</td>
</tr>
<tr>
    <td><a href="#stop_job"><CopyableCode code="stop_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-branch_name"><code>branch_name</code></a>, <a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Stops a job that is in progress for a branch of an Amplify app.</td>
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
<tr id="parameter-app_id">
    <td><CopyableCode code="app_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID for an Amplify app.</td>
</tr>
<tr id="parameter-branch_name">
    <td><CopyableCode code="branch_name" /></td>
    <td><code>string</code></td>
    <td>The name of the branch to use for the stop job request.</td>
</tr>
<tr id="parameter-job_id">
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The unique id for the job.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to list in a single response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token. Set to null to start listing branches from the start. If a non-null pagination token is returned in a result, pass its value in here to list more branches.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_branch"
    values={[
        { label: 'get_branch', value: 'get_branch' },
        { label: 'list_branches', value: 'list_branches' }
    ]}
>
<TabItem value="get_branch">

Returns a branch for an Amplify app.

```sql
SELECT
active_job_id,
associated_resources,
backend,
backend_environment_arn,
basic_auth_credentials,
branch_arn,
branch_name,
build_spec,
compute_role_arn,
create_time,
custom_domains,
description,
destination_branch,
display_name,
enable_auto_build,
enable_basic_auth,
enable_notification,
enable_performance_mode,
enable_pull_request_preview,
enable_skew_protection,
environment_variables,
framework,
pull_request_environment_name,
source_branch,
stage,
tags,
thumbnail_url,
total_number_of_jobs,
ttl,
update_time
FROM aws.amplify.branches
WHERE app_id = '{{ app_id }}' -- required
AND branch_name = '{{ branch_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_branches">

Lists the branches of an Amplify app.

```sql
SELECT
active_job_id,
associated_resources,
backend,
backend_environment_arn,
basic_auth_credentials,
branch_arn,
branch_name,
build_spec,
compute_role_arn,
create_time,
custom_domains,
description,
destination_branch,
display_name,
enable_auto_build,
enable_basic_auth,
enable_notification,
enable_performance_mode,
enable_pull_request_preview,
enable_skew_protection,
environment_variables,
framework,
pull_request_environment_name,
source_branch,
stage,
tags,
thumbnail_url,
total_number_of_jobs,
ttl,
update_time
FROM aws.amplify.branches
WHERE app_id = '{{ app_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_branch"
    values={[
        { label: 'create_branch', value: 'create_branch' },
        { label: 'create_deployment', value: 'create_deployment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_branch">

Creates a new branch for an Amplify app.

```sql
INSERT INTO aws.amplify.branches (
branchName,
description,
stage,
framework,
enableNotification,
enableAutoBuild,
enableSkewProtection,
environmentVariables,
basicAuthCredentials,
enableBasicAuth,
enablePerformanceMode,
tags,
buildSpec,
ttl,
displayName,
enablePullRequestPreview,
pullRequestEnvironmentName,
backendEnvironmentArn,
backend,
computeRoleArn,
app_id,
region
)
SELECT 
'{{ branchName }}' /* required */,
'{{ description }}',
'{{ stage }}',
'{{ framework }}',
{{ enableNotification }},
{{ enableAutoBuild }},
{{ enableSkewProtection }},
'{{ environmentVariables }}',
'{{ basicAuthCredentials }}',
{{ enableBasicAuth }},
{{ enablePerformanceMode }},
'{{ tags }}',
'{{ buildSpec }}',
'{{ ttl }}',
'{{ displayName }}',
{{ enablePullRequestPreview }},
'{{ pullRequestEnvironmentName }}',
'{{ backendEnvironmentArn }}',
'{{ backend }}',
'{{ computeRoleArn }}',
'{{ app_id }}',
'{{ region }}'
RETURNING
branch
;
```
</TabItem>
<TabItem value="create_deployment">

Creates a deployment for a manually deployed Amplify app. Manually deployed apps are not connected to a Git repository. The maximum duration between the CreateDeployment call and the StartDeployment call cannot exceed 8 hours. If the duration exceeds 8 hours, the StartDeployment call and the associated Job will fail.

```sql
INSERT INTO aws.amplify.branches (
fileMap,
app_id,
branch_name,
region
)
SELECT 
'{{ fileMap }}',
'{{ app_id }}',
'{{ branch_name }}',
'{{ region }}'
RETURNING
file_upload_urls,
job_id,
zip_upload_url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: branches
  props:
    - name: app_id
      value: "{{ app_id }}"
      description: Required parameter for the branches resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the branches resource.
    - name: branch_name
      value: "{{ branch_name }}"
      description: Required parameter for the branches resource.
    - name: branchName
      value: "{{ branchName }}"
    - name: description
      value: "{{ description }}"
    - name: stage
      value: "{{ stage }}"
      valid_values: ['PRODUCTION', 'BETA', 'DEVELOPMENT', 'EXPERIMENTAL', 'PULL_REQUEST']
    - name: framework
      value: "{{ framework }}"
    - name: enableNotification
      value: {{ enableNotification }}
    - name: enableAutoBuild
      value: {{ enableAutoBuild }}
    - name: enableSkewProtection
      value: {{ enableSkewProtection }}
    - name: environmentVariables
      value: "{{ environmentVariables }}"
    - name: basicAuthCredentials
      value: "{{ basicAuthCredentials }}"
    - name: enableBasicAuth
      value: {{ enableBasicAuth }}
    - name: enablePerformanceMode
      value: {{ enablePerformanceMode }}
    - name: tags
      value: "{{ tags }}"
    - name: buildSpec
      value: "{{ buildSpec }}"
      description: |
        The build specification (build spec) file for an Amplify app build.
    - name: ttl
      value: "{{ ttl }}"
      description: |
        The content Time to Live (TTL) for the website in seconds.
    - name: displayName
      value: "{{ displayName }}"
    - name: enablePullRequestPreview
      value: {{ enablePullRequestPreview }}
    - name: pullRequestEnvironmentName
      value: "{{ pullRequestEnvironmentName }}"
    - name: backendEnvironmentArn
      value: "{{ backendEnvironmentArn }}"
    - name: backend
      description: |
        Describes the backend associated with an Amplify Branch. This property is available to Amplify Gen 2 apps only. When you deploy an application with Amplify Gen 2, you provision the app's backend infrastructure using Typescript code.
      value:
        stackArn: "{{ stackArn }}"
    - name: computeRoleArn
      value: "{{ computeRoleArn }}"
    - name: fileMap
      value: "{{ fileMap }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_branch"
    values={[
        { label: 'update_branch', value: 'update_branch' }
    ]}
>
<TabItem value="update_branch">

Updates a branch for an Amplify app.

```sql
UPDATE aws.amplify.branches
SET 
description = '{{ description }}',
framework = '{{ framework }}',
stage = '{{ stage }}',
enableNotification = {{ enableNotification }},
enableAutoBuild = {{ enableAutoBuild }},
enableSkewProtection = {{ enableSkewProtection }},
environmentVariables = '{{ environmentVariables }}',
basicAuthCredentials = '{{ basicAuthCredentials }}',
enableBasicAuth = {{ enableBasicAuth }},
enablePerformanceMode = {{ enablePerformanceMode }},
buildSpec = '{{ buildSpec }}',
ttl = '{{ ttl }}',
displayName = '{{ displayName }}',
enablePullRequestPreview = {{ enablePullRequestPreview }},
pullRequestEnvironmentName = '{{ pullRequestEnvironmentName }}',
backendEnvironmentArn = '{{ backendEnvironmentArn }}',
backend = '{{ backend }}',
computeRoleArn = '{{ computeRoleArn }}'
WHERE 
app_id = '{{ app_id }}' --required
AND branch_name = '{{ branch_name }}' --required
AND region = '{{ region }}' --required
RETURNING
branch;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_branch"
    values={[
        { label: 'delete_branch', value: 'delete_branch' }
    ]}
>
<TabItem value="delete_branch">

Deletes a branch for an Amplify app.

```sql
DELETE FROM aws.amplify.branches
WHERE app_id = '{{ app_id }}' --required
AND branch_name = '{{ branch_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_job"
    values={[
        { label: 'start_job', value: 'start_job' },
        { label: 'start_deployment', value: 'start_deployment' },
        { label: 'stop_job', value: 'stop_job' }
    ]}
>
<TabItem value="start_job">

Starts a new job for a branch of an Amplify app.

```sql
EXEC aws.amplify.branches.start_job 
@app_id='{{ app_id }}' --required, 
@branch_name='{{ branch_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"jobId": "{{ jobId }}", 
"jobType": "{{ jobType }}", 
"jobReason": "{{ jobReason }}", 
"commitId": "{{ commitId }}", 
"commitMessage": "{{ commitMessage }}", 
"commitTime": "{{ commitTime }}"
}'
;
```
</TabItem>
<TabItem value="start_deployment">

Starts a deployment for a manually deployed app. Manually deployed apps are not connected to a Git repository. The maximum duration between the CreateDeployment call and the StartDeployment call cannot exceed 8 hours. If the duration exceeds 8 hours, the StartDeployment call and the associated Job will fail.

```sql
EXEC aws.amplify.branches.start_deployment 
@app_id='{{ app_id }}' --required, 
@branch_name='{{ branch_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"jobId": "{{ jobId }}", 
"sourceUrl": "{{ sourceUrl }}", 
"sourceUrlType": "{{ sourceUrlType }}"
}'
;
```
</TabItem>
<TabItem value="stop_job">

Stops a job that is in progress for a branch of an Amplify app.

```sql
EXEC aws.amplify.branches.stop_job 
@app_id='{{ app_id }}' --required, 
@branch_name='{{ branch_name }}' --required, 
@job_id='{{ job_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
